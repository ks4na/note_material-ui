import React from 'react'
import { UseStylesNestedComp, WithStylesNestedComp } from './NestedComponent'

export default function Parent(): JSX.Element {
  return (
    <>
      <p>useStyles</p>
      <UseStylesNestedComp
        classes={{ root: 'root-from-parent', label: 'label-from-parent' }}
      />
      <p>withStyles</p>
      <WithStylesNestedComp
        classes={{ root: 'root-from-parent', label: 'label-from-parent' }}
      />
    </>
  )
}
