import * as U from "karet.util"
import React  from "karet"

import scroll from "../../client/scroll"

function special(e) {
  e.preventDefault()
  e.stopPropagation()
}

let onsite

const isExt = U.lift1Shallow(href => /^https?:\/\//.test(href))

export default U.withContext(({
  href, onClick: outerOnClick, onThere, mount, className, ...props
}, {
  location
}) => {
  const onClick = href => e => {
    const internal = /^((\/[^?#]*)([?][^#]*)?)?([#].*)?$/.exec(href)

    if (internal) {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)
        return

      const [,, path = "", search = "", hash = ""] = internal

      if (!path && !search) {
        if (!hash && onsite) {
          special(e)
          window.history.back()
        } else {
          window.setTimeout(() => scroll(hash, 200, onThere), 10)
        }
      } else {
        special(e)
        location.set({path, search, hash})

        if (!hash)
          scroll(0, 1, onThere)
        else
          window.setTimeout(() => scroll(hash, onThere), 100)
      }
    }
    onsite=1
  }

  return <a href={href}
     ref={mount}
     onClick={U.actions(outerOnClick, U.lift(onClick)(href))}
     className={U.string`${U.or(className, "")} ${U.ifte(isExt(href), "ext-link", "")}`}
     {...props}/>
})