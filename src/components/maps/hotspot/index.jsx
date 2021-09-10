import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom'
import { AppActionType } from '../../../effects/types';
import CompassMap from '../compass';
const HotspotMap = ({ redirect = '', transform = 'translate(10775.096 -16032.766)', map = "ground-floor-polisport", type = 1 }) => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const active = location.pathname === redirect
    const onClickHotspot = () => {
        history.push(redirect)
        dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_MAP, payload: { show: false, map: null } });
    }
    useEffect(() => {
        console.log('hotspot', map, location.pathname, redirect, active, transform)
    }, [])

    const groundFloorPolisportMap = (
        <g id={redirect} transform={transform} onClick={() => onClickHotspot()} className="cursor-pointer">

            {!active && <circle id="Ellipse_104" data-name="Ellipse 104" cx="6.748" cy="6.748" r="6.748" transform="translate(-10775.096 16032.767)" fill="#fff" opacity="0.4" />}
            {!active && <g id="Ellipse_105" data-name="Ellipse 105" transform="translate(-10771.316 16036.546)" fill="rgba(1,102,164,0.88)" stroke="rgba(1,102,164,0.24)" strokeWidth="1" opacity="0.7">
                <circle cx="2.969" cy="2.969" r="2.969" stroke="none" />
                <circle cx="2.969" cy="2.969" r="3.469" fill="none" />
            </g>}

            {active && <CompassMap transform={"translate(-10796.096 16008.767)"} />}
        </g>
    )

    const firstFloorPolisportMap = (
        <g id={redirect} transform={transform} onClick={() => onClickHotspot()} className="cursor-pointer">

            {!active && <circle id="Elipse_140" data-name="Elipse 140" cx="6.748" cy="6.748" r="6.748" transform="translate(-20329.691 -22257.641)" fill="#fff" opacity="0.4"/>}
            {!active && <g id="Elipse_142" data-name="Elipse 142" transform="translate(-20325.912 -22253.863)" fill="rgba(1,102,164,0.88)" stroke="rgba(1,102,164,0.24)" stroke-width="1" opacity="0.7">
              <circle cx="2.969" cy="2.969" r="2.969" stroke="none"/>
              <circle cx="2.969" cy="2.969" r="3.469" fill="none"/>
            </g>}

            {/* {active && <circle id="Elipse_140" data-name="Elipse 140" cx="6.748" cy="6.748" r="15.748" transform="translate(-20329.691 -22257.641)" fill="red" opacity="0.4"/>}} */}
            {active && <CompassMap transform={"translate(-20350 -22280)"} />}
        </g>
    )

    const groundFloorPolinterMap = (
        <g id={redirect} transform={transform} onClick={() => onClickHotspot()} className="cursor-pointer">

            {!active && <circle id="Ellipse_104" data-name="Ellipse 104" cx="6.748" cy="6.748" r="6.748" transform="translate(-19929.969 12630.519)" fill="#fff" opacity="0.4" />}
            {!active && <g id="Ellipse_105" data-name="Ellipse 105" transform="translate(-19926.189 12634.298)" fill="rgba(1,102,164,0.88)" stroke="rgba(1,102,164,0.24)" strokeWidth="1" opacity="0.7">
                <circle cx="2.969" cy="2.969" r="2.969" stroke="none" />
                <circle cx="2.969" cy="2.969" r="3.469" fill="none" />
            </g>}

            {active && <CompassMap transform={"translate(-19952.189 12610.298)"} />}
        </g>
    )

    const groundFloorCLMMap = (
        <g id={redirect} transform={transform} onClick={() => onClickHotspot()} className="cursor-pointer">

            {!active && <circle id="Ellipse_104-6" data-name="Ellipse 104" cx="6.748" cy="6.748" r="6.748" fill="#fff" opacity="0.4" />}
            {!active && <g id="Ellipse_105-6" data-name="Ellipse 105" transform="translate(3.779 3.779)" fill="rgba(1,102,164,0.88)" stroke="rgba(1,102,164,0.24)" strokeWidth="1" opacity="0.7">
                <circle cx="2.969" cy="2.969" r="2.969" stroke="none" />
                <circle cx="2.969" cy="2.969" r="3.469" fill="none" />
            </g>}

            {active && <CompassMap transform={"translate(-827.646 -2571.864)"} type={type} />}
        </g>
    )

    const firstFloorPolinterMap = (
        <g className="cursor-pointer">
            {active && <CompassMap type={3} />}
            <g id={redirect} transform={transform} onClick={() => onClickHotspot()} >

                {!active && <circle id="Ellipse_104-3" data-name="Ellipse 104" cx="6.748" cy="6.748" r="6.748" transform="translate(-19929.969 12630.519)" fill="#fff" opacity="0.4" />}
                {!active && <g id="Ellipse_105-3" data-name="Ellipse 105" transform="translate(-19926.189 12634.298)" fill="rgba(1,102,164,0.88)" stroke="rgba(1,102,164,0.24)" strokeWidth="1" opacity="0.7">
                    <circle cx="2.969" cy="2.969" r="2.969" stroke="none" />
                    <circle cx="2.969" cy="2.969" r="3.469" fill="none" />
                </g>}

                {active && <CompassMap transform={"translate(-19952.189 12610.298)"} type={type} />}
            </g>
        </g>

    )

    switch (map) {
        case "ground-floor-polisport":
            return groundFloorPolisportMap;

        case "first-floor-polisport":
            return firstFloorPolisportMap;

        case "ground-floor-polinter":
            return groundFloorPolinterMap;

        case "ground-floor-clm":
            return groundFloorCLMMap;

        case "first-floor-polinter":
            return firstFloorPolinterMap;

        default:
            return groundFloorPolisportMap;
    }
}

export default HotspotMap