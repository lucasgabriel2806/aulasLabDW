import React from "react";
import ReactApexChart from "react-apexcharts";

export default function TodoStatusChart({ todos }) {
  const contagem = todos.reduce(
    (acc, todo) => {
      const situacao = todo.situacao || "PENDENTE";
      if (situacao === "CONCLUIDA") {
        acc.FINALIZADA += 1;
      } else if (acc[situacao] !== undefined) {
        acc[situacao] += 1;
      } else {
        acc.PENDENTE += 1;
      }
      return acc;
    },
    { PENDENTE: 0, FINALIZADA: 0, CANCELADA: 0 }
  );

  const series = [
    contagem.PENDENTE,
    contagem.FINALIZADA,
    contagem.CANCELADA,
  ];

  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      fontFamily: "inherit",
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: ["Pendentes", "Finalizadas", "Canceladas"],
    },
    yaxis: {
      min: 0,
      forceNiceScale: true,
      labels: {
        formatter: (value) => Math.round(value),
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      y: {
        formatter: (value) => `${value} tarefa${value === 1 ? "" : "s"}`,
      },
    },
    responsive: [
      {
        breakpoint: 640,
        options: {
          chart: { height: 280 },
          plotOptions: { bar: { columnWidth: "55%" } },
        },
      },
    ],
  };

  return (
    <div className="mb-6 rounded-xl border border-gray-200 bg-gray-50 p-4 md:p-6">
      <div className="mb-3">
        <h3 className="text-lg font-bold text-gray-800">Situação das tarefas</h3>
        <p className="text-sm text-gray-500">
          Quantidade de tarefas em cada situação.
        </p>
      </div>

      <ReactApexChart
        type="bar"
        options={options}
        series={[{ name: "Tarefas", data: series }]}
        height={300}
      />
    </div>
  );
}
