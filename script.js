const endDate = "17 Jan 2024 10:00:00 PM"

document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input")

    // const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end -now)/1000;
    console.log(diff)
    //convert in days
input[0].value = Math.floor(diff/(3600*24))
input[1].value = Math.floor((diff/3600)%24)
input[2].value = Math.floor((diff/60)%60)
input[3].value = Math.floor(diff%60)



}
clock()
setInterval(
    () => {
        clock()
    },

)
