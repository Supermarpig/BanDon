//員工管理頁面：管理員可以查看、新增、修改和刪除員工資料。
import React, { useEffect, useState } from 'react'
import { Input } from '@components/ui/Input'
import fetchAPI from '../utils/fetchAPI'

export default function page() {

    const [rainData, setRainData] = useState([]);

    useEffect(() => {
        const init = async () => {
            const testData = await fetchAPI({
                url: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/C-B0025-001?Authorization=CWA-8E823EA5-B7CD-4C42-8E04-8E601EB7A566&format=JSON&sort=dataTime&statistics=true',
            })
            setRainData(testData && testData.data.records.location)
        }
        init();
    }, [])

    return (
        <>
            <div>page1</div>

            <Input type='text'
                placeholder={'測試'}
                textColor='green'
                // className='border-2 border-solid border-black'
                borderColor='border-2 border-solid border-black'
            />
            <>
                {rainData && rainData.map((item: any, index: any) => (
                    <div key={index}>
                        <h2>{item.station.StationName}</h2>
                        {item.stationObsStatistics.Precipitation.monthly.map((monthlyData: any, i: number) => (
                            <p key={i}>{monthlyData.YearMonth}月平均降雨量:{monthlyData.Total} mm</p>
                        ))}
                    </div>
                ))}
            </>


        </>
    )
}
