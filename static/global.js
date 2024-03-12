console.log("IT’S ALIVE!");


// document.body.insertAdjacentHTML("afterbegin", `
// 	<label class="color-scheme">
// 		Theme:
// 		<select>
//         <option value="light dark">Auto</option>
// 		<option value="light">Light</option>
// 		<option value="dark">Dark</option>
// 		</select>
// 	</label>`
// );

// let select = document.querySelector('select');

// function setColorScheme(colorScheme) {
//     document.documentElement.style.setProperty("color-scheme", colorScheme);
// }

// select.addEventListener("input", function (event) {
//     localStorage.colorScheme = event.target.value
//     setColorScheme(event.target.value);
// });

// if ("colorScheme" in localStorage) {
// 	select.value = localStorage.colorScheme;
// 	setColorScheme(select.value)
// }

let form = document.querySelector('form');

form?.addEventListener("submit", function (event) {
    event.preventDefault()
    let data = new FormData(form);
    for (let [name, value] of data) {
        var url = form.action + '?';
        var queryParams = [];
        // Iterate over form elements
        var formElements = form.elements;
        for (var i = 0; i < formElements.length; i++) {
            var element = formElements[i];
            if (element.name && element.value) {
                queryParams.push(encodeURIComponent(element.name) + '=' + encodeURIComponent(element.value));
            }
        }
        // Concatenate all query parameters
        url += queryParams.join('&');

        // Redirect to the constructed URL
        window.location.href = url;

    }
});