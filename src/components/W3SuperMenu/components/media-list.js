import React from "react"
import { Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const MediaList = (props) => {

  return (
    <ul class="media-list span4">

      {props.href ?

        <a href={props.href}>
          <li class="media">

            <div class="media-body">

              <img src={props.icon} className="media-object" />
              {/* <img src={props.icon_selected} className="media-object-white" /> */}
              {/* <object type="image/svg+xml" data={props.icon || ''} class="media-object"></object> */}

              <h5 class="media-heading">
                {props.title || ''}
              </h5>
              <p>
                {props.subtitle || ''}
              </p>
            </div>
          </li>
        </a>

        :
        <NavLink to={props.link || '/'}>
          <li class="media">

            <div class="media-body"  >
              <img src={props.icon} className="media-object" />
              <img src={props.icon_selected} className="media-object-white" />
              {/* <object type="image/svg+xml" data={props.icon || ''} class="media-object"></object> */}

              <h5 class="media-heading">
                {props.title || ''}
              </h5>
              <p>
                {props.subtitle || ''}
              </p>
            </div>
          </li>
        </NavLink>
      }

    </ul>
  )
}

export default MediaList