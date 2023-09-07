'use client'

import dynamic from 'next/dynamic'
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

export function FrontEnd() {
  return (
    <div className="mt-2 flex flex-wrap">
      <ApexChart
        type="polarArea"
        options={{
          chart: {
            foreColor: '#9ca3af',
          },
          fill: {
            opacity: 0.8,
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
          labels: ['Html', 'CSS', 'Javascript ES6+', 'NextJS', 'React-Native'],
        }}
        series={[60, 67, 89, 60, 43]}
        height={480}
        width={480}
      />
    </div>
  )
}
