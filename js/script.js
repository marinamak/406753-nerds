var link = document.querySelector(".button-contacts");
		var popup = document.querySelector(".modal-write-us");
		var close = popup.querySelector(".modal-close");
		var form = popup.querySelector("form");
		var user = popup.querySelector("[name=user]");	
		var email = popup.querySelector("[name=email]");
		var message = popup.querySelector("[name=message]");
		var isStorageSupport = true;
  		var storage = "";
  
		try {
		  storage = localStorage.getItem("user");
		} catch (err) {
		  isStorageSupport = false;
		}	

		link.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.add("modal-show");
			if (storage) {
      			user.value = storage;
      			email.focus();
    		} else {
      			user.focus();
    		}
		});

		close.addEventListener("click", function (evt) {
		    evt.preventDefault();
		    popup.classList.remove("modal-show");
		    popup.classList.remove("modal-error");
		});

		form.addEventListener("submit", function (evt) {
    		if (!user.value || !email.value || !message.value) {
      			evt.preventDefault();
      			popup.classList.remove("modal-error");
      			popup.offsetWidth = popup.offsetWidth;
      			popup.classList.add("modal-error");
    		} else {
      			if (isStorageSupport) {
        			localStorage.setItem("user", user.value);
      			}
    		}
  		});

  		window.addEventListener("keydown", function (evt) {
    		if (evt.keyCode === 27) {
      			evt.preventDefault();
      			if (popup.classList.contains("modal-show")) {
        			popup.classList.remove("modal-show");
        			popup.classList.remove("modal-error");
      			}
    		}
  		});