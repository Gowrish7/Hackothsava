// const login = document.querySelector('.login')
// const setStartTime = document.querySelector('.setTime');
// const startTimeInput = document.querySelector('.startTime');
// const formSubmit = document.querySelector(".formSubmit")
// formSubmit.addEventListener('click', async(e) => {
//     e.preventDefault();
//     var today = new Date();
//     var startTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     const name = document.querySelector('#name').value
//     const seatId = 10
//     let phonenumber = document.querySelector('#phonenumber').value
//     if(phonenumber.toString().length != 10) return
//     else {
//         phonenumber = "+91" + phonenumber 
//         const data = {
//             name: name,
//             phonenumber: phonenumber,
//             seatId: seatId,
//             startTime: startTime
//         }
//         console.log(data)
//         const response = await fetch("http://localhost:3100/authenticate", {
//           method: "POST", 
//           mode: "cors", 
//           cache: "no-cache", 
//           credentials: "same-origin", 
//           headers: {
//             // "Content-Type": "application/json",
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//           redirect: "follow", 
//           referrerPolicy: "no-referrer", 
//           body: JSON.stringify(data), 
//         });
//         console.log(response)
//     }
    // const name = e.target.name
// })
// setStartTime.addEventListener('click', () => {
//     var today = new Date();
//     var Hours = String(today.getHours()).padStart(2, '0');
//     var Minutes = String(today.getMinutes()).padStart(2, '0');
//     var startTime = Hours + ":" + Minutes;
//     startTimeInput.value = startTime
//     let seatId = document.querySelector('.seatId').value
//     console.log(seatId)
// })
