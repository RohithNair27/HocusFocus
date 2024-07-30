import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="iconify iconify--twemoji"
    viewBox="0 0 36 36"
    {...props}
  >
    <Path
      fill="#292F33"
      d="M3.651 29.852 29.926 3.576c.391-.391 2.888 2.107 2.497 2.497L6.148 32.349c-.39.391-2.888-2.107-2.497-2.497z"
    />
    <Path
      fill="#66757F"
      d="M30.442 4.051 4.146 30.347l.883.883L31.325 4.934z"
    />
    <Path
      fill="#E1E8ED"
      d="m34.546 2.537-.412-.412-.671-.671a.967.967 0 0 0-.255-.169.988.988 0 0 0-1.159.169l-2.102 2.102.495.495.883.883 1.119 1.119 2.102-2.102a.999.999 0 0 0 0-1.414zM5.029 31.23l-.883-.883-.495-.495-2.209 2.208a.988.988 0 0 0-.169 1.159c.046.09.094.18.169.255l.671.671.412.412a.999.999 0 0 0 1.414 0l2.208-2.208-1.118-1.119z"
    />
    <Path
      fill="#F5F8FA"
      d="m31.325 4.934 2.809-2.809-.671-.671a.967.967 0 0 0-.255-.169l-2.767 2.767.884.882zM4.146 30.347 1.273 33.22c.046.09.094.18.169.255l.671.671 2.916-2.916-.883-.883z"
    />
    <Path
      fill="#FFF"
      d="m28.897 14.913 1.542-.571.6-2.2a.667.667 0 0 1 1.287 0l.6 2.2 1.542.571a.665.665 0 0 1 0 1.25l-1.534.568-.605 2.415a.667.667 0 0 1-1.293 0l-.605-2.415-1.534-.568a.665.665 0 0 1 0-1.25"
    >
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </Path>
    <Path
      fill="#FFF"
      d="m11.961 5.285l2.61-.966.966-2.61a1.103 1.103 0 0 1 2.07 0l.966 2.61 2.609.966a1.103 1.103 0 0 1 0 2.07l-2.609.966-.966 2.61a1.105 1.105 0 0 1-2.07 0l-.966-2.61-2.61-.966a1.104 1.104 0 0 1 0-2.07"
    >
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.5s"
        begin="0.5s"
        repeatCount="indefinite"
      />
    </Path>
    <Path
      fill="#FFF"
      d="m24.13 20.772l1.383-.512.512-1.382a.585.585 0 0 1 1.096 0l.512 1.382 1.382.512a.584.584 0 0 1 0 1.096l-1.382.512-.512 1.382a.585.585 0 0 1-1.096 0l-.512-1.382-1.383-.512a.585.585 0 0 1 0-1.096"
    >
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.5s"
        begin="1s"
        repeatCount="indefinite"
      />
    </Path>
  </Svg>
);
export default SvgComponent;
