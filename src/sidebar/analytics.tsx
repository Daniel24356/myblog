// import { BarChart } from 'recharts'
import AreaCharts from './AreaChart'
import LineCharts from './LineChart'
// import LineChart from './LineChart'
import PieChartSec from './PieChart2'
import './analytics.css'    
import BarChartSec from './barChart'
import { SlCalender } from "react-icons/sl";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { RiArrowDropUpLine } from "react-icons/ri";

const Analytics = () => {
    return (
        <>
        <div className='all-ana'>
            <div>
                <div className="analytic-box">
                    <div>
                        <h1 className='ana-text'>Google Analytics</h1>
                    </div>
                    <div className='input-div'>
                        <SlCalender/>
                        <input className='ana-input' type="text" placeholder="Last 30 Days" />
                        <MdOutlineArrowDropDown />
                    </div>
                </div>
                <div className='chosen-box'>
                    <p className='cho-view'>Chosen View: <strong>128168233</strong></p>
                    <p className='ana-repo'>How Google Analytics Reports Work?</p>
                </div>
            </div>

            <div className='report-box'>
                <div className='report-section'>
                    <p>GENERAL REPORT</p>
                    <p>TRAFFIC SOURCES</p>
                    <p>DEMO REPORT</p>
                    <p>LONG LINE CHARTS</p>
                </div>
                <div className='btn-box'>
                    <button className='setting-btn'>
                     <IoMdSettings className='set-icon'/>
                    </button>
                    <button className='plus-btn'>
                      < FaPlus className='set-icon'/>
                    </button>
                </div>

            </div>

            <div className='chart-table'>
                <div className='areaChart'>
                    <div className='see-b'>
                        <p className='sess'>Sessions</p>
                        <div className='icons-indiv'>
                        <IoMdSettings className='icon-i'/>
                          <RiArrowDropUpLine className='icon-i'/>
                        </div>
                    </div>
                    <div className='chart-done'>
                        <AreaCharts />
                    </div>
                </div>
                <div className='barChart'>
                    <div className='see-bs'>
                        <p className='sess'>Countries</p>
                        <div className='icons-indiv'>
                        < IoMdSettings className='icon-i'/>
                          <RiArrowDropUpLine className='icon-i'/>
                        </div>
                      
                    </div>
                    {/* <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Users</th>
                                    <th>Sessions</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr>
                                    <th>United States</th>
                                    <th>516</th>
                                    <th>587</th>
                                </tr>
                                <tr>
                                    <th>United Kingdom</th>
                                    <th>188</th>
                                    <th>204</th>
                                </tr>
                                <tr>
                                    <th>India</th>
                                    <th>144</th>
                                    <th>155</th>
                                </tr>
                                <tr>
                                    <th>Estonia</th>
                                    <th>41</th>
                                    <th>107</th>
                                </tr>
                                <tr>
                                    <th>Canada</th>
                                    <th>81</th>
                                    <th>85</th>
                                </tr>
                                <tr>
                                    <th>Germany</th>
                                    <th>66</th>
                                    <th>74</th>
                                </tr>
                                <tr>
                                    <th>Australia</th>
                                    <th>57</th>
                                    <th>71</th>
                                </tr>
                                <tr>
                                    <th>Spain</th>
                                    <th>41</th>
                                    <th>57</th>
                                </tr>
                                <tr>
                                    <th>France</th>
                                    <th>39</th>
                                    <th>49</th>
                                </tr>
                                <tr>
                                    <th>Pakistan</th>
                                    <th>9</th>
                                    <th>42</th>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
                    <div className='chart-done'>
                     <BarChartSec/>
                    </div>
                </div>
            </div>

            <div className='chart-chart'>
                <div className='lineChart'>
                    <LineCharts />
                </div>
                <div className='pieChart'>
                    <PieChartSec />
                </div>
            </div>
            </div>
        </>
    )


}

export default Analytics