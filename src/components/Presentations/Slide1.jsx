import React from 'react'
import { Impress, Step } from 'react-impressjs';
//import { Impress, Step } from '../';
// import './styles/_base.scss';
//import '../styles/impress-demo.css';
import "./1.min.css"
import "./2.min.css"
import demo from './Slide1Content'
export default function Slide1() {
  return (
    <Impress progress={true}>
      {
        demo.map( (d, index ) => {
          return (
            React.createElement( Step, {
              id: d.id, 
              className: d.className,
              data: d.data,
              key: index
            }, 
            d.content.map( (child, index) => {
              return (
                React.cloneElement( child, {
                  id: child.id,
                  className: child.className,
                  key: index
                })
              );
            }))
            
          );
        })
      }
      </Impress>
  )
}
