import React from 'react';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import { fonts } from '../../core';
import Box from '../../components/Box';

const getDayName = (subtractDay) => {
    return moment().subtract(subtractDay, "days").format("YYYY-MM-DD");
}

const labels = [getDayName(0), getDayName(1), getDayName(2), getDayName(3), getDayName(4), getDayName(5), getDayName(6)].reverse();

export const options = {
    responsive: true,
    interaction: {
        intersect: false,
        mode: 'index',
    },
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        tooltip: {
            backgroundColor: '#000000',
            bodyColor: "#FFFFFF",
            displayColors: false,
            callbacks: {
                title: (items) => {
                    return moment(items[0].label).format('dddd, DD MMMM YYYY');
                },
                label: (tooltipItem, data) => {
                    return `${tooltipItem.formattedValue} transaksi`;
                }
            }
        }
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                color: "#000000",
                font: {
                    family: fonts.system,
                    size: 14,
                },
                callback: function (value, index, ticks) {
                    return moment(labels[index]).format('ddd');
                }
            }
        },
        y: {
            ticks: {
                color: "#000000",
                precision: 0,
                font: {
                    family: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                }
            }
        }
    },
    elements: {
        line: {
            tension: 0.5
        }
    }
};

const getRandomInt = () => {
    return Math.floor(Math.random() * 12);
}

export const data = {
    labels,
    datasets: [
        {
            data: labels.map(() => getRandomInt()),
            borderColor: '#000000',
            backgroundColor: '#000000',
            pointStyle: 'circle',
            pointRadius: 5,
            pointHoverRadius: 7
        },
    ],
};

const ChartData = () => {
    return (
        <div className='mt-0'>
            <div className='font-bold text-lg'>Statistik</div>
            <div>Data statistik transaksi tujuh hari terakhir</div>
            <Box className="rounded divide-y divide-solid mt-4 p-5" css={{
                background: '$backgroundTertiary',
            }}>
                <Line options={options} data={data} />
            </Box>
        </div>
    )
}

export default ChartData;