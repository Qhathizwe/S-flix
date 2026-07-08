import React from 'react'

type props={
    children: React.ReactNode
}

export const ContentContainer: React.FC<props> = ({children}) => {
  return   (
    <div style={{fontSize: '20px', color: 'red', backgroundColor: 'black', 
         marginLeft: '10px', fontWeight: 'bolder', fontFamily: 'cursive', marginTop: '20px'}}>
     {children}
    </div>
  )
}
