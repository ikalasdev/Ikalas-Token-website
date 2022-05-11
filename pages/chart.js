import {data} from '../component/Pie'

import dynamic from "next/dynamic";


const MyResponsivePie = dynamic(()=> import ('../component/Pie'), {ssr:false})


const Chart = () => {
    return (
      <div className="divchart">
        <MyResponsivePie data={data} />
      </div>
    );
  };
  export default Chart;