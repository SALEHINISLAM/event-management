import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-tailwind/react';
import Lottie from 'react-lottie';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Banner = props => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1371%26quot%3b)' fill='none'%3e%3cpath d='M130.191%2c279.244C179.847%2c275.764%2c214.435%2c236.297%2c240.151%2c193.676C267.078%2c149.049%2c293.101%2c96.299%2c268.202%2c50.51C242.582%2c3.394%2c183.672%2c-12.549%2c130.191%2c-8.543C83.35%2c-5.034%2c49.16%2c29.223%2c23.878%2c68.811C-4.276%2c112.897%2c-33.74%2c164.528%2c-10.152%2c211.217C14.973%2c260.95%2c74.608%2c283.139%2c130.191%2c279.244' fill='rgba(194%2c 194%2c 194%2c 0.59)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M142.657%2c284.407C197.026%2c284.971%2c254.381%2c269.942%2c281.938%2c223.071C309.79%2c175.699%2c296.248%2c117.434%2c268.823%2c69.814C241.336%2c22.087%2c197.717%2c-20.102%2c142.657%2c-18.771C89.225%2c-17.479%2c52.822%2c29.079%2c26.63%2c75.669C1.118%2c121.05%2c-16.998%2c174.726%2c8.295%2c220.23C34.14%2c266.727%2c89.463%2c283.855%2c142.657%2c284.407' fill='rgba(194%2c 194%2c 194%2c 0.59)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M82.165%2c169.166C120.256%2c171.235%2c164.171%2c173.466%2c185.36%2c141.745C208.085%2c107.724%2c199.231%2c61.742%2c176.761%2c27.551C156.387%2c-3.451%2c119.172%2c-17.87%2c82.165%2c-15.279C49.342%2c-12.981%2c24.584%2c10.928%2c8.03%2c39.363C-8.655%2c68.024%2c-19.731%2c102.701%2c-3.283%2c131.499C13.263%2c160.469%2c48.852%2c167.357%2c82.165%2c169.166' fill='rgba(194%2c 194%2c 194%2c 0.59)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1337.991%2c54.508C1352.362%2c53.655%2c1360.457%2c39.583%2c1367.421%2c26.983C1374.065%2c14.963%2c1380.512%2c1.288%2c1374.126%2c-10.871C1367.406%2c-23.665%2c1352.439%2c-29.358%2c1337.991%2c-29.05C1324.098%2c-28.754%2c1311.614%2c-21.28%2c1304.432%2c-9.384C1296.982%2c2.957%2c1295.111%2c18.116%2c1301.814%2c30.878C1308.993%2c44.545%2c1322.58%2c55.423%2c1337.991%2c54.508' fill='rgba(194%2c 194%2c 194%2c 0.59)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1340.58%2c60.174C1357.937%2c61.704%2c1374.932%2c52.532%2c1383.767%2c37.514C1392.72%2c22.295%2c1392.647%2c2.875%2c1382.983%2c-11.902C1374.077%2c-25.52%2c1356.834%2c-29.29%2c1340.58%2c-28.524C1325.827%2c-27.829%2c1311.538%2c-21.232%2c1304.579%2c-8.205C1297.956%2c4.194%2c1302.282%2c18.472%2c1308.831%2c30.91C1316.017%2c44.56%2c1325.214%2c58.82%2c1340.58%2c60.174' fill='rgba(194%2c 194%2c 194%2c 0.59)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1436.312%2c252.472C1483.488%2c249.691%2c1513.125%2c207.228%2c1536.589%2c166.207C1559.824%2c125.587%2c1581.026%2c78.745%2c1559.43%2c37.23C1536.568%2c-6.718%2c1485.843%2c-27.47%2c1436.312%2c-26.559C1388.399%2c-25.677%2c1345.385%2c0.487%2c1320.8%2c41.621C1295.514%2c83.928%2c1289.551%2c136.146%2c1313.232%2c179.372C1337.804%2c224.225%2c1385.258%2c255.481%2c1436.312%2c252.472' fill='rgba(194%2c 194%2c 194%2c 0.59)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M36.318%2c554.168C60.892%2c553.881%2c82.747%2c539.501%2c94.926%2c518.155C106.992%2c497.006%2c108.425%2c470.794%2c95.747%2c450.006C83.53%2c429.976%2c59.717%2c420.341%2c36.318%2c422.06C15.57%2c423.585%2c1.346%2c440.12%2c-9.693%2c457.754C-21.749%2c477.014%2c-34.499%2c499.047%2c-24.713%2c519.554C-13.917%2c542.177%2c11.253%2c554.461%2c36.318%2c554.168' fill='rgba(194%2c 194%2c 194%2c 0.59)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M66.074%2c600.403C98.016%2c599.495%2c129.232%2c587.423%2c145.977%2c560.206C163.522%2c531.688%2c164.949%2c495.65%2c148.446%2c466.517C131.714%2c436.98%2c99.958%2c417.086%2c66.074%2c419.152C34.931%2c421.051%2c15.581%2c448.901%2c-0.563%2c475.601C-17.558%2c503.709%2c-37.571%2c536.008%2c-22.1%2c564.982C-6.11%2c594.929%2c32.14%2c601.367%2c66.074%2c600.403' fill='rgba(194%2c 194%2c 194%2c 0.59)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M104.623%2c690.456C150.149%2c689.015%2c182.806%2c650.256%2c203.094%2c609.475C220.982%2c573.517%2c220.173%2c532.275%2c200.823%2c497.082C180.673%2c460.434%2c146.442%2c430.862%2c104.623%2c430.381C62.091%2c429.892%2c26.179%2c458.221%2c4.516%2c494.826C-17.617%2c532.224%2c-25.067%2c577.384%2c-5.271%2c616.07C16.326%2c658.275%2c57.237%2c691.956%2c104.623%2c690.456' fill='rgba(194%2c 194%2c 194%2c 0.59)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1407.099%2c622.649C1444.2%2c624.397%2c1485.331%2c615.137%2c1502.978%2c582.455C1520.093%2c550.758%2c1500.88%2c514.535%2c1482.059%2c483.821C1464.386%2c454.982%2c1440.92%2c425.653%2c1407.099%2c425.995C1373.668%2c426.333%2c1350.825%2c456.013%2c1334.721%2c485.312C1319.362%2c513.254%2c1310.825%2c545.892%2c1325.691%2c574.1C1341.479%2c604.058%2c1373.273%2c621.055%2c1407.099%2c622.649' fill='rgba(194%2c 194%2c 194%2c 0.59)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1348.826%2c517.907C1367.57%2c518.619%2c1387.678%2c512.913%2c1396.772%2c496.507C1405.674%2c480.447%2c1398.879%2c461.097%2c1388.832%2c445.728C1379.853%2c431.992%2c1365.235%2c422.945%2c1348.826%2c423.163C1332.782%2c423.376%2c1318.885%2c433.016%2c1310.62%2c446.768C1302.066%2c461.001%2c1298.942%2c478.461%2c1306.799%2c493.091C1315.049%2c508.453%2c1331.402%2c517.245%2c1348.826%2c517.907' fill='rgba(194%2c 194%2c 194%2c 0.59)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1374.97%2c569.712C1401.381%2c571.136%2c1426.438%2c555.184%2c1438.449%2c531.62C1449.559%2c509.823%2c1440.69%2c485.268%2c1428.956%2c463.801C1416.542%2c441.089%2c1400.797%2c417.182%2c1374.97%2c415.487C1346.838%2c413.641%2c1319.32%2c430.384%2c1307.14%2c455.809C1296.152%2c478.747%2c1309.324%2c503.504%2c1322.337%2c525.357C1334.919%2c546.485%2c1350.415%2c568.388%2c1374.97%2c569.712' fill='rgba(194%2c 194%2c 194%2c 0.59)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1371'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`, backgroundRepeat:'no-repeat' , backgroundSize:'100% 100%', height:'100%', width:'100%'}} className='grid grid-cols-1 lg:grid-cols-2 p-4 min-h-screen justify-center items-center rounded-xl'>
            <div className="flex flex-col gap-6 py-12" data-aos="fade-up"
     data-aos-duration="3000">
                <h2 className='text-3xl font-semibold'>
                Get stuck with managing events?
                </h2>
                <h1 className='text-5xl font-extrabold'>
                    {`Don't Worry !!!`}
                </h1>
                <p className='text-xl'>
                    We are here to help you...
                </p>
                <Button>
                    Get Started
                </Button>
            </div>
            <div className="w-full h-full" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <iframe src="https://lottie.host/embed/d153b4fe-66e6-4c7c-af74-6297c85d38c9/lw7KNoIWmp.json" className='w-full h-full'></iframe>
            </div>
        </div>
    );
};

Banner.propTypes = {
    
};

export default Banner;