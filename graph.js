// เลือก Canvas และสร้างกราฟแท่ง
const canvas = document.getElementById("barChart");
const ctx = canvas.getContext("2d");

// ข้อมูลสำหรับกราฟ
const data = [120, 80, 160,];
const labels = ["Playgame " , "Cook", "sleep"];

// สร้างกราฟแท่ง
function createBarChart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const maxValue = Math.max(...data);
  const barWidth = (canvas.width - 20) / data.length;
  
  for (let i = 0; i < data.length; i++) {
    const barHeight = (data[i] / maxValue) * (canvas.height - 20);
    const x = i * (barWidth + 5) + 10;
    const y = canvas.height - barHeight - 10;

    ctx.fillStyle = "#3498db";
    ctx.fillRect(x, y, barWidth, barHeight);
    
    ctx.fillStyle = "#333";
    ctx.fillText(labels[i], x + barWidth / 2, canvas.height - 5);
  }
}

createBarChart();