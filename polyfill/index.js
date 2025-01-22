const nums = [];
delete Array.prototype.includes;
Promise = undefined;

if (typeof Promise === "undefined") {
    window.Promise = function(executor) {
        this._resolved = false;
        this._value = undefined;
        this._callbacks = [];

        const resolve = (value) => {
            if (this._resolved) return;
            this._resolved = true;
            this._value = value;
            this._callbacks.forEach(cb => cb(value));
        };
        executor(resolve);
        this.then = (callback) => {
            if (this._resolved) {
                callback(this._value);
            } else {
                this._callbacks.push(callback);
            }
            return this;
        };
    }
}

window.onload = () => {
    if (typeof Array.prototype.includes === "undefined") {
        Array.prototype.includes = function(element) {
            return this.indexOf(element) > -1;
        }
    }
    const btn = document.querySelector("#submitButton");
    btn.addEventListener("click", () => {
        const input = document.getElementById("userInput");
        nums.push(input.value);
        const numsDiv = document.getElementById("nums");
        numsDiv.innerHTML = `<p>${nums.join(", ")}</p>`
    });
    const btn2 = document.getElementById("checkButton");
    btn2.addEventListener("click", () => {
        const checkNum = document.getElementById("searchInput").value;
        const resultDiv = document.getElementById("searchResult");
        if (nums.includes(checkNum)) {
            resultDiv.innerHTML = `<p>Yes, that number is in the list!</p>`;
        } else {
            resultDiv.innerHTML = `<p>No, that number is not in the list!</p>`;
        }
    });

    const getRandomData = () => {
        const prms = new Promise((res, rej) => {
            setTimeout(() => {
                res(Math.random() * 10);
            }, 500);
        });
        return prms;
    }
    getRandomData()
        .then((result) => {
            document.getElementById("randomNum").innerHTML = `<p>Random Number: ${result}</p>`
        });
};