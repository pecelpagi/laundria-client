import React, { useContext, useMemo } from 'react';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import { fonts } from '../../core';
import Box from '../../components/Box';
import { ChartDataSkeleton } from './chart-data.components';
import { selectDailyTransactionTotalData } from '../../store/summary/summary.selector';
import { useSelector } from 'react-redux';

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
            tension: 0
        }
    }
};

export const createLineData = (dailyTransactionTotal) => {
    if (!dailyTransactionTotal) return null;

    const data = labels.map((label) => {
        const found = dailyTransactionTotal.find(x => x.date_created_at === label)

        if (found) return found.daily_transaction_total;

        return 0;
    });

    return {
        labels,
        datasets: [
            {
                data,
                borderColor: '#000000',
                backgroundColor: '#000000',
                pointStyle: 'circle',
                pointRadius: 5,
                pointHoverRadius: 7
            },
        ],
    };
};

const ChartData = () => {
    const dailyTransactionTotal = useSelector(selectDailyTransactionTotalData);
    const lineData = useMemo(() => createLineData(dailyTransactionTotal), [dailyTransactionTotal]);

    return (
        <div className='mt-0'>
            <div className='font-bold text-lg'>Statistik</div>
            <div>Data statistik transaksi tujuh hari terakhir</div>
            {lineData && (
                <Box
                    className="rounded mt-4 p-5"
                    css={{
                        background: '$backgroundTertiary',
                    }}
                >
                    <Line options={options} data={lineData} />
                </Box>
            )}
            {!lineData && <ChartDataSkeleton />}
        </div>
    )
}

export default ChartData;