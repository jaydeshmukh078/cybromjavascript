let fetchdata = async () => {
    // pending   resolve   reject
    let url = 'http://localhost:3000/Bewkoof'

    let res = await fetch(url, { method: "GET" })

    let data = await res.json()

    console.log(data);





    let datashow = document.querySelector("#usedata");



    data.map((e) => {
        datashow.innerHTML += `
        <tr>
          <td>${e.Name}</td>
          <td>${e.Number}</td>
          <td>${e.Checkindate}</td>
          <td>${e.Checkoutdate}</td>
          <td>${e.City}</td>
          <td>${e.Person}</td>
          <td>${e.Total}</td>
          <td onclick="del('${e.id}')"> Delete</td>
        </tr>
        `;

    });




}

    let del=(id)=>{

        let url=`http://localhost:3000/Bewkoof/${id}`
        fetch(url, { method: "DELETE" })
        

    }
fetchdata()