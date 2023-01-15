import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CircularProgress({ semi, value, width, height, text, fontSize, textColor, progressColor }) {
  return (
    <div style={{ width: width, height: height }}>
      {
        semi ? (
          <CircularProgressbar value={value} text={text} styles={{ text: { fontSize: fontSize, fill: textColor, fontWeight:600 }, path: { stroke: progressColor, transform: 'rotate(0.75turn)', transformOrigin: 'center center' }}}/>
        ) : (
          <CircularProgressbar value={value} text={text} styles={{ text: { fontSize: fontSize, fill: textColor, fontWeight:600 }, path: { stroke: progressColor }}}/>
        )
      }
    </div>
  )
}