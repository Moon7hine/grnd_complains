// Создание кнопок с шаблонами ответов
function createTemplatesButtons() {
    // Список шаблонов ответов
    var responseTemplates = [
      {
        name: "Одобрена",
        description: "Наказание игрока",
        text:
          "Уважаемый {complain_from},\n\nБлагодарим вас за вашу жалобу {complain_number}. Мы тщательно рассмотрели вашу жалобу и приняли решение в вашу пользу. Мы уже приняли соответствующие меры в отношении {complain_on}, чтобы обеспечить справедливую игровую среду. Ваша активная позиция и участие в создании безопасного и приятного игрового опыта очень важны для нас. Спасибо за ваше участие!\n\nС уважением,\nАдминистрация GrandMobile"
      },
      {
        name: "Отклонена (нехватка)",
        description: "Недостаточно доказательств",
        text: "Уважаемый {complain_from},\n\nБлагодарим вас за вашу жалобу {complain_number}. Понимаем, что нарушения правил могут быть неприятным опытом. Однако, для проведения расследования и принятия соответствующих мер, нам необходимы дополнительные доказательства. Просим вас предоставить нам больше информации и доказательств, чтобы мы могли принять необходимые меры в отношении {complain_on}. Ваше сотрудничество и понимание важны для нас. Спасибо за ваше участие!\n\nС уважением,\nАдминистрация GrandMobile"
      },
      {
        name: "Отклонена (пустышка)",
        description: "Жалоба без информации",
        text: "Уважаемый {complain_from},\n\nБлагодарим вас за вашу жалобу {complain_number}. Просим вас составить новую жалобу с подробным описанием ситуации и предоставленными доказательствами (при наличии). Спасибо за ваше участие!\n\nС уважением,\nАдминистрация GrandMobile"
      },
      {
        name: "Отклонена (нет нарушения)",
        description: "Игрок не нарушает",
        text: "Уважаемый {complain_from},\n\nБлагодарим вас за вашу жалобу {complain_number}. После проведения расследования мы пришли к выводу, что в данной жалобе {complain_on} не нарушает правил игры. Мы всегда стремимся поддерживать честную и справедливую игровую среду для всех участников. Ваша внимательность и активное участие в сообществе игры оцениваются нами. Спасибо за понимание!\n\nС уважением,\nАдминистрация GrandMobile"
      },
      {
        name: "Отклонена (уже наказан)",
        description: "Игрок уже наказан",
        text: "Уважаемый {complain_from},\n\nБлагодарим вас за вашу жалобу {complain_number}. Мы провели расследование и пришли к выводу, что не можем наказать игрока. Мы также хотим проинформировать вас, что игрок {complain_on} уже был наказан за данное нарушение. Мы всегда стремимся поддерживать честную и справедливую игровую среду для всех участников. Ваша внимательность и активное участие в сообществе игры оцениваются нами. Спасибо за понимание!\n\nС уважением,\nАдминистрация GrandMobile"
      },
      {
        name: "Отклонена (дубликат жалобы)",
        description: "Жалоба продублирована",
        text: "Уважаемый {complain_from},\n\nБлагодарим вас за вашу жалобу {complain_number}. Однако, мы обнаружили, что данная жалоба является дубликатом предыдущей. Мы постоянно работаем над обеспечением честной и справедливой игровой среды, и ваше активное участие в этом процессе важно для нас. Если у вас возникнут новые обстоятельства или новые причины для жалобы, не стесняйтесь обращаться к нам снова. Спасибо за ваше сотрудничество!\n\nС уважением,\nАдминистрация GrandMobile"
      },
      {
        name: "Отклонена (обрезанные)",
        description: "Нечитабельно или редактирование",
        text: "Уважаемый {complain_from},\n\nБлагодарим вас за вашу жалобу {complain_number}. Однако, при рассмотрении вашей жалобы было обнаружено, что доказательства нечитабельны или были подвержены редактированию (обрезка). ПОжалуйста, будьте добры составить новую жалобу с оригинальными доказательствами. Спасибо за понимание!\n\nС уважением,\nАдминистрация GrandMobile"
      },
      {
        name: "Отклонена (амнистия -)",
        description: "Не подлежит амнистии",
        text: "Уважаемый {complain_from},\n\nБлагодарим вас за вашу жалобу {complain_number}. Мы тщательно рассмотрели вашу жалобу и приняли решение отказа в амнистии. Наказание выдано по разумному решению, чтобы обеспечить справедливую игровую среду. Спасибо за ваше участие!\n\nС уважением,\nАдминистрация GrandMobile"
      },

      // Для старших 

      {
        name: "Одобрена (амнистия +)",
        description: "Подлежит амнистии",
        text: "Уважаемый {complain_from},\n\nБлагодарим вас за вашу жалобу {complain_number}. Мы тщательно рассмотрели вашу жалобу и приняли решение амнистии в вашу пользу. Наказание будет смягчено, чтобы обеспечить справедливую игровую среду. Спасибо за ваше участие!\n\nС уважением,\nАдминистрация GrandMobile"
      },
      {
        name: "Отклонена (верно)",
        description: "Выдано верно",
        text: "Уважаемый {complain_from},\n\nБлагодарим вас за вашу жалобу {complain_number}. После проведения расследования мы пришли к выводу, что в данной жалобе {complain_on} выдал наказание верно. Мы всегда стремимся поддерживать честную и справедливую игровую среду для всех участников. Ваша внимательность и активное участие в сообществе игры оцениваются нами. Спасибо за понимание!\n\nС уважением,\nАдминистрация GrandMobile"
      },
      {
        name: "Отклонена (не нарушает)",
        description: "Не запрещено",
        text: "Уважаемый {complain_from},\n\nБлагодарим вас за вашу жалобу {complain_number}. После проведения расследования мы пришли к выводу, что в данной жалобе {complain_on} не нарушает правила администрирования. Мы всегда стремимся поддерживать честную и справедливую игровую среду для всех участников. Ваша внимательность и активное участие в сообществе игры оцениваются нами. Спасибо за понимание!\n\nС уважением,\nАдминистрация GrandMobile"
      },
      {
        name: "Одобрена (беседа)",
        description: "Беседа администратору",
        text: "Уважаемый {complain_from},\n\nБлагодарим вас за вашу жалобу {complain_number}. После проведения расследования мы пришли к выводу, что в данной жалобе {complain_on} сделал неправильное решение. С администратором будет проведена дисциплинарная беседа. Ваша внимательность и активное участие в сообществе игры оцениваются нами. Спасибо за понимание!\n\nС уважением,\nАдминистрация GrandMobile"
      }
      // Другие шаблоны ответов...
    ];
  
    // Получение значений из элементов жалобы
    var complaintNumber = document.querySelector(".info .title").textContent.replace("# ", "#");
    var complainant = document.querySelector(".item:nth-child(2) .title").textContent;
    var accused = document.querySelector(".item:nth-child(3) .title").textContent;
  
    // Создаем контейнер для кнопок
    var buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("templates-buttons-container");
  
    responseTemplates.forEach(function (template) {
      var templateButton = document.createElement("button");
      templateButton.innerText = template.name;
      templateButton.classList.add("template-button");
      templateButton.dataset.description = template.description;
      templateButton.dataset.text = template.text.replace("{complain_from}", complainant).replace("{complain_number}", complaintNumber).replace("{complain_on}", accused);
  
      // Создаем всплывающую подсказку с описанием
      var tooltip = document.createElement("span");
      tooltip.classList.add("tooltip");
      tooltip.innerText = template.description;
      templateButton.appendChild(tooltip);
  
      templateButton.addEventListener("click", function () {
        var responseTextarea = document.querySelector(".verdict textarea");
        responseTextarea.value = templateButton.dataset.text;
        responseTextarea.dispatchEvent(new Event("input")); // Инициируем событие input
      });
      buttonsContainer.appendChild(templateButton);
    });
  
    // Добавляем стиль CSS для кнопок
    var customStyles = document.createElement("style");
    customStyles.innerHTML = `
      .templates-buttons-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 10px;
      }
  
      .template-button {
        margin: 5px;
        padding: 10px 20px;
        background-color: inherit;
        border: inherit;
        border-radius: inherit;
        font-size: inherit;
        cursor: pointer;
        position: relative;
      }
  
      .template-button .tooltip {
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #f2f2f2;
        color: #333;
        padding: 5px 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        white-space: nowrap;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.2s ease;
      }
  
      .template-button:hover .tooltip {
        visibility: visible;
        opacity: 1;
      }
    `;
    buttonsContainer.appendChild(customStyles);
  
    // Находим блок ".info"
    var infoBlock = document.querySelector(".info");
    if (infoBlock) {
      // Создаем новую строку для кнопок
      var buttonsRow = document.createElement("div");
      buttonsRow.classList.add("buttons-row");
      buttonsRow.appendChild(buttonsContainer);
  
      // Вставляем строку с кнопками после блока ".info"
      infoBlock.parentNode.insertBefore(buttonsRow, infoBlock.nextSibling);
    }
  }
  
  // Проверка, что страница с жалобами загружена
  function checkComplaintsPage() {
    var complaintsContent = document.querySelector(".admin-complaints-content");
    if (complaintsContent) {
      createTemplatesButtons();
    } else {
      setTimeout(checkComplaintsPage, 1000); // Проверяем каждую секунду, пока не найдем нужный элемент
    }
  }
  
  // Запускаем проверку страницы с жалобами
  checkComplaintsPage();
  