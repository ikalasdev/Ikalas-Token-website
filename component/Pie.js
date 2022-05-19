import { ResponsivePie } from "@nivo/pie";
import { _tr } from "../services/translate"

export const data = [
  {
    id: "Foundation",
    label: "Ikalas Foundation",
    value: 30,
    color: "hsl(257,47%,57%)",
  },
  {
    id: "Insiders",
    label: "Ikalas employees",
    value: 10,
    color: "hsl(226,64,47)",
  },

  {
    id: "Community",
    label: "Community",
    value: 60,
    color: "hsl(223,48,20)",
  },
];


const MyResponsivePie = ({ data }) => (
    <ResponsivePie
    data={data}
    margin={{ top: 40, right: 90, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={15}
    activeOuterRadiusOffset={25}
    colors={["#6414f9","#7438be","#00a6f9"]}
    borderWidth={2}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                '1.3'
            ]
        ]
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#FFFFFF"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                0
            ]
        ]
    }}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    motionConfig="wobbly"
    
/>
);

export default MyResponsivePie;