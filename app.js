//promise

//login()
//fetchData()
//homeScreen()


// const login = ()=>{
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             resolve('Log in Finished')
//         }, 3000)
//     })
// }
//
// const fetchData = () => {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             resolve("Data Loading Finished")
//         },2000)
//     })
// }
// function homeScreen(screenData){
//     console.log(screenData)
// }



//Promise Chaining Course
//login
//fetchData()
//getUserPhotos()
//getUserFriends()
//showHomeFeed()

const login = () =>{
    const loginData = new Promise((resolve, reject) =>{
        setTimeout(() => {
            // resolve("Log in Data Completed")
            reject("Rejected")
        },2000)
    })
    return loginData;
}

const fetchData = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Data has received")
        }, 1000)
    })
}

const getUserPhotos = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Photos have been fetched")
        },1000)
    })
}

const getUserFriends = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Friends have been fetched")
        },1000)
    })
}

const showHomeFeed = (data) =>{
    console.log(data)
}
//Promise Chaining

const buildUI =async () => {
    try {
        const logInData = await login();
        console.log(logInData);
        const fetchDatas = await fetchData();
        console.log(fetchDatas);
        const userPhotos = await getUserPhotos();
        console.log(userPhotos);
        const userFriends = await getUserFriends();
        console.log(userFriends);
        showHomeFeed(userFriends);
    }
    catch (e) {
        console.log(e)
    }

    // login().then((data) => {
    //     console.log(data)
    //     return fetchData()
    // }).then((data)=>{
    //     console.log(data)
    //     return getUserPhotos();
    // }).then((data)=>{
    //     console.log(data)
    //     return getUserFriends();
    // }).then((data) =>{
    //     console.log(data)
    //     return showHomeFeed("FinalData")
    // })
    //     .catch((err) =>{
    //         console.error(err)
    //     })
}
buildUI();



//Callback hell or pyraid of tree
// login().then((data) => {
//     console.log(data)
//     fetchData().then((data) => {
//         console.log(data)
//         getUserPhotos().then((data) =>{
//             console.log(data)
//             getUserFriends().then((data) => {
//                 console.log(data)
//             }).catch((err) =>{
//                 console.error(err)
//             })
//         }).catch((err) =>{
//             console.error(err)
//         })
//     }).catch((err) =>{
//         console.error(err)
//     })
// }).catch((err)=> {
//     console.error(err)
// })