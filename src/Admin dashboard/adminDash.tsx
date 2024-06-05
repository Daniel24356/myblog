import AHeader from "./A-header"
import AHero from "./A-hero"
import BarCharts from "./barschart"
import PieChartss from "./pieSec"
import PieCharts from "./piechart"
import BarChartss from "./secBar"
import BarChartsss from "./thirdBar"



const HalfDash = () => {
    return (
        <>
            <div className='all-A'>
                <AHeader />
                <AHero />
                <div className='A-chart'>
                    <div className='A-bar'>
                        <BarCharts />
                    </div>
                    <div className='A-bars'>
                        <BarChartss />
                    </div>
                    <div className='A-barss'>
                        <BarChartsss />
                    </div>
                    <div className='A-pie'>
                        <PieCharts />
                    </div>
                    <div className='A-pies'>
                        <PieChartss />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HalfDash