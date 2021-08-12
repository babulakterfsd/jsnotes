/*



1. ============= Give a simple example of asynchornous code =============
let takeOrder = (customer, callback) => {
    console.log(`take order from ${customer}`);
    callback()
}

let processOrder = (customer,callback) => {
    console.log(`cooking is being started for ${customer}`);
    setTimeout(() => {
       console.log(`cooking has been completed after 3 seconds..`);
       callback()
    },3000);
}

let orderComplete = (customer,callback) => {
    setTimeout(() => {
        console.log(`order has been processed for ${customer} after 5 seconds`);
        callback()
    },5000)
}

let billing = (customer) => {
    console.log(`${customer} has paid the bill`);
}

takeOrder(`Babul`, () => {
    processOrder(`Babul`, () => {
        orderComplete(`Babul`, () => {
            billing(`Babul`)
        })
    })
})
console.log(`hello`);

















2. =============== A complete example of promise , async, await ===============
let r = true;
let promiseone = () => {
    return new Promise((resolve,reject) => {
        if(r) {
            let obj = {
                name: `Awal`,
                age: 28
            }
            resolve(obj)
        } else {
            reject(new Error(`promise has been rejected`))
        }
    })
}

let promisetwo = (res) => {
    return new Promise((resolve,reject) => {
        if(res) {
            resolve(res.age)
        } else {
            reject(new Error(`object creation failed in the first promise`))
        }
    })
}

let caller = async() => {
    try {
        let first = await promiseone();
    let second = await promisetwo(first)
    console.log(second);
    } catch (error) {
        console.log(error.message);
    }
}
caller()









3. ============== What is promise chain and how to do it ? ==============
  
let hasMeeting = false;
let meeting = new Promise((resolve,reject) => {
  if(!hasMeeting) {
    let meeting = {
      name: `techniqal meeting`,
      place: `online`,
      time: `3rd june, 2021`
    }
    resolve(meeting)
  } else {
    reject(new Error(`Meeting has already been scheduled`))
  }
})

let newFunc = (meetingResult) => {
  return Promise.resolve(`The meeting time is scheduled at ${meetingResult.time}`)
}

let lastPromise = (jaIccha) => {
  return Promise.resolve(typeof jaIccha)
}

meeting
 .then(newFunc)
 .then(lastPromise)
 .then((res) => {
   console.log(res);
 }).catch((err) => {
   console.log(err.message);
 })

















4. ========== Give a practical example of async / await implementation  ==========

async / await impliment .... async r await hocche synchronous way te asynchronous code lekhar system .. noile promise er then likhte likhte jan sesh hoye jeto

   let v = false;

let promise1 = new Promise((resolve,reject) => {
   setTimeout(() => {
    if(v) {
        let obj = {
            name: `awal`
        }
        resolve(obj)
    } else {
        reject(`promise1 data rejected`)
    }
   }, 3000)
})

let promise2 = (para) => {
    return new Promise((resolve,reject) => {
        if(v) {
            resolve(para.name)
        } else {
            reject(`code rejected from promise2`)
        }
    })
}

async function syncFunc() {
    try {
        let result = await promise1;
    let final = await promise2(result)
    console.log(final);
    } catch (error) {
        console.log(error);
    }

    othoba shob promise eksathe pete:
         try {
        let result = await Promise.all([promise1,promise2()])
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
syncFunc()
console.log(`hello`);










5.====================== how to create custom xmlhttp request (send an ajax request) and get data? =================


function getRequest(url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)

    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.response)
                callback(null, response)
            } else {
                callback(xhr.status, null)
            }
        }
    }

    xhr.send()
}
getRequest('https://jsonplaceholder.typicode.com/users', (err, res) => {
    if (err) {
        console.log(err)
    } else {
        console.log(res)
        res.forEach(r => alert(r.name))
    }
})

getRequest('https://jsonplaceholder.typicode.com/posts', (err, res) => {
    if (err) {
        console.log(err)
    } else {
        res.forEach(r => console.log(r.title))
    }
})





 
6. ============= A default fucntion to manage thousands of get request ============

function getRequest(url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)

    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.response)
                callback(null, response)
            } else {
                callback(xhr.status, null)
            }
        }
    }

    xhr.send()
}

const BASE_URL = 'https://jsonplaceholder.typicode.com'

getRequest(`${BASE_URL}/posts/1`, (err, res) => {
    if (err) {
        throw new Error('Error Occurred')
    }
 
    let { userId } = res
    
    getRequest(`${BASE_URL}/users/${userId}`, (err, res) => {
        if (err) {
            throw new Error('Error Occurred')
        }

        getRequest(`${BASE_URL}/posts/1/comments/${res.id}`, (err, res) => {
            if (err) {
                throw new Error('Error Occurred')
            }

            console.log(res)
        })
    })
})



















7. =================== Two ways of creating a promise   =================
let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'One')
})
p1.then((v) => {
    console.log(v)
}).catch((err) => {
    console.log(err)
})

function getIphone(isPassed) {   //another way of creating promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPassed) {
                resolve('I have Got an I Phone')
            } else {
                reject(new Error('You have Failed'))
            }
        }, 2000) 
    })
}

getIphone(false)
    .then((res) => {
        console.log(res)
}).catch((e) => {
        console.log(e.message)
})
























8. ============== A function with http request with promise   ================
    const BASE_URL = 'https://jsonplaceholder.typicode.com'
    fetch(`${BASE_URL}/users/1`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return Promise.resolve('Something')
        })
        .then(str => {
            console.log(str)
            return Promise.resolve('Another Promise')
        })
        .then(another => {
            console.log(another)
        })
        .catch(e => {
            console.log(e)
        }) 
    
    function getRequest(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.open('get', url)
    
            xhr.onreadystatechange = function (e) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        let response = JSON.parse(xhr.response)
                        resolve(response)
                    } else {
                        reject(new Error('Error Occurred'))
                    }
                }
            }
    
            xhr.send()
        })
    }
    
    getRequest(`${BASE_URL}/users/1445`)
        .then(data => {
            console.log(data)
        })
        .catch(e => {
            console.log(e.message)
        })


















9. =============== how to create delay function with promise  ==============
const delay = s => new Promise(resolve => setTimeout(resolve, s*1000)) 

delay(2).then(() => console.log('2 Seconds Delay'))
delay(1).then(() => console.log('1 Seconds Delay'))
delay(3).then(() => console.log('3 Seconds Delay'))
delay(2).then(() => console.log('2 Seconds Delay'))
delay(5).then(() => console.log('5 Seconds Delay'))







10. ================== promise.all method ================
let p1 = Promise.resolve('One')
let p2 = Promise.resolve('Two')
let p3 = Promise.resolve('Three')

let promiseArr = [p1, p2, p3]
Promise.all(promiseArr)
    .then(arr => {
        console.log(arr)
    })























11. =================== how does promise.race method work?  ====================
let p1 = new Promise(resolve => {
    setTimeout(resolve, 5000, 'One')
})

let p2 = new Promise(resolve => {
    setTimeout(resolve, 3000, 'Two')
})

let p3 = new Promise(resolve => {
    setTimeout(resolve, 4000, 'Three')
})

let promiseArr = [p1, p2, p3]

Promise.race(promiseArr)
    .then(v =>  console.log(v))




















12. ==================Try catch or error handling with promise ===============
async function fetchData() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users')

        let data = await res.json()

        let names = data.map(u => u.name)
        console.log(names)
    } catch (e) {
        console.log(e.message)
    }
}
fetchData()








*/