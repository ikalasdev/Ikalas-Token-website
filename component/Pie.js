import { ResponsivePie } from "@nivo/pie";

export const data = [
  {
    id: "Creators",
    label: "Creators",
    value: "33",
    color: "hsl(257,47%,57%)",
  },
  {
    id: "Shareholders",
    label: "Shareholders",
    value: "33",
    color: "hsl(226,64,47)",
  },

  {
    id: "Community",
    label: "Community",
    value: '33',
    color: "hsl(223,48,20)",
  },
];


const MyResponsivePie = ({ data }) => (
    <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={15}
    activeOuterRadiusOffset={25}
    colors={{ scheme: 'blues' }}
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
    legends={[
        {
            anchor: 'top-left',
            direction: 'column',
            justify: false,
            translateX: 35,
            translateY: 0,
            itemWidth: 52,
            itemHeight: 26,
            itemsSpacing: 3,
            symbolSize: 25,
            itemDirection: 'left-to-right',
            "symbolShape": "circle",
            "itemTextColor": '#fff',
        }
    ]}
/>
);

export default MyResponsivePie;