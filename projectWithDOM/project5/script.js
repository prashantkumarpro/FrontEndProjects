const arryOfstoriyan = [
    { userDp: "https://ik.imagekit.io/sheryians/Sheryians_Logo_wFKd9VClG.png", story:"./story-img1.jpg", userName: "sheryians_co..." },
    { userDp: "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80", story: "https://images.unsplash.com/photo-1560953663-a9ba863d2817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80", userName: "Pretty_Angel" },
    { userDp: "https://images.unsplash.com/photo-1597080043188-6d05d75e44eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1596818478861-7d2ae387ca89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80", userName: "Pretty_Eyes" },
    { userDp: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80", story: "https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80", userName: "Beauty_Fool" },
    { userDp: "https://plus.unsplash.com/premium_photo-1663047491377-fa618959663f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJvY2slMjBibHVlJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1580620587035-3d94b5e42d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJvY2slMjBibHVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", userName: "Rock_Blue" },
    { userDp: "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", story: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", userName: "Say_Cute" }
]
let styoriyan = document.querySelector('.styoriyan');
let clutter = '';

arryOfstoriyan.forEach(function (elem, idx) {
    clutter += `
    <div class="story-area">
        <div class="story">
            <img id="${idx}" src="${elem.userDp}" alt="">
        </div>
        <h6>${elem.userName}</h6>
    </div>
    `
})


styoriyan.innerHTML = clutter;

styoriyan.addEventListener('click', function (event) {

    styoriyan.style.display = 'none'
    document.querySelector('.nav').style.display = 'none'
    document.querySelector('#full-screen').style.display = 'block'
    document.querySelector('#full-screen').style.backgroundImage = `url(${arryOfstoriyan[event.target.id].story})`
    
   console.log( arryOfstoriyan[event.target.id].story)
    setTimeout(() => {
    document.querySelector('#full-screen').style.display = 'none'
    styoriyan.style.display = 'block'
    document.querySelector('.nav').style.display = 'block'
    }, 3000);
   
})