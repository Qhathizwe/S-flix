import React from 'react'

type props= {
    children: React.ReactNode
}

export const PicsContainer: React.FC<props> = ({children}) => {
  return (
    <div style={{display: 'inline-flex', gap: '5px', cursor: 'pointer', width: '200px', height: '400px',
                padding: '50px'
    }}>
        {children}</div>
  )
}
