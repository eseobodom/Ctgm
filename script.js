document.getElementById('user-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const form = event.target;
            const formData = new FormData(form);
            const submitButton = form.querySelector('button[type="submit"]');
            const spinner = form.querySelector('.spinner');

     
            spinner.style.display = 'inline-block';
            submitButton.disabled = true;

            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                spinner.style.display = 'none';
                submitButton.disabled = false;

                if (response.ok) {
                    document.getElementById('successModal').style.display = 'block';
                } else {
                    document.getElementById('errorModal').style.display = 'block';
                }
            }).catch(error => {
                spinner.style.display = 'none';
                submitButton.disabled = false;
                document.getElementById('errorModal').style.display = 'block';
            });
        });

        document.getElementById('successButton').addEventListener('click', function() {
            document.getElementById('successModal').style.display = 'none';
            window.location.href = 'thankyou.html';
        });

        document.getElementById('errorButton').addEventListener('click', function() {
            document.getElementById('errorModal').style.display = 'none';
        });
      function writeText(text){
        let index = 0;
        function writeNextLetter(){
          if (index < text.length) {
            document.getElementById('head').innerHTML += text.charAt(index);
            index++;
          } else {
            clearInterval(interval);
          }
        }
        let interval = setInterval(writeNextLetter,100);
      }
      writeText("Christ True Gospel Mission Int'l");