class CarView {
  public drawCar(id: number, title: string, color: string): HTMLElement {
    const carBlock = document.createElement('div');
    carBlock.classList.add('car-item', 'car');
    carBlock.innerHTML = `
      <div class="car__info">
        <button class="button button--select" data-select="${id}">Select</button>
        <button class="button button--remove" data-remove="${id}">Remove</button>
        <h3 class="car__title">${title}</h3>
      </div>
      <div class="car__main">
        <button class="button button--race button--start" data-start="${id}">A</button>
        <button class="button button--race button--stop" data-stop="${id}" disabled>B</button>
        <div class="car__image" data-car="${id}">
          <svg width="121" height="51" viewBox="0 0 121 51" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="a" fill="#fff"><path d="M52.629.877c.2.29.417.412.675.502.838.292 1.606.427 2.587.548 1.5.184 3.114.489 4.59.81 1.889.41 3.741.966 5.58 1.56a63.972 63.972 0 0 1 4.928 1.815 65.063 65.063 0 0 1 4.53 2.115 62.857 62.857 0 0 1 3.72 2.062 67.597 67.597 0 0 1 3.675 2.363c1.372.946 2.698 1.947 4.02 2.962.766.589 1.54 1.177 2.265 1.815.49.43.443.5 1.08.93.488.33 1.085.283 1.635.023.55-.26 1.462-.803 1.462-.803s-1.095-.818-1.957-1.417c.016.002.038.013.053.015.547.075 1.252-.129 1.8-.21.332-.05.677-.064 1.012-.045.73.04 1.444.21 2.16.352 3.53.7 7.059 1.455 10.515 2.46 2.49.725 4.954 1.556 7.343 2.565.794.336 1.599.674 2.31 1.163.655.45 1.267.983 1.762 1.605.467.587.79 1.286 1.11 1.965.299.634.612 1.27.75 1.957.216 1.07.112 2.18.105 3.27a38.397 38.397 0 0 1-.157 3.525c-.119 1.2-.293 2.24-.345 3.443-.011.252-.007.663.097.892.078.173.095.209.15.39.05.164-.03.346-.097.503a3.275 3.275 0 0 1-.705 1.005c-.145.145-.354.212-.503.352-.217.206-.343.496-.555.705-.451.446-.945.863-1.507 1.156-.796.413-1.691.612-2.565.81-.942.212-1.911.318-2.873.397-.669.055-1.236.127-2.01.053-.553-.01-.465-.006-.967-.016.41-1.175.637-2.442.637-3.757 0-6.29-5.103-11.385-11.392-11.385-6.29 0-11.386 5.095-11.386 11.385 0 1.158.174 2.277.495 3.33-.36-.006-.29-.001-.675-.008-24.991-.304-37.895-.723-56.842-1.005-.333-.005-.654-.015-.983-.022.195-.834.3-1.702.3-2.595 0-6.29-5.095-11.385-11.385-11.385S5.68 34.127 5.68 40.417c0 .393.02.78.06 1.162a4.06 4.06 0 0 1-.99-.307c-.661-.3-1.254-.748-1.815-1.208a12.815 12.815 0 0 1-1.658-1.657c-.318-.377-.725-.732-.855-1.208-.165-.6.118-.463.15-1.867.05-2.213-.002-4.43.15-6.638.06-.875.078-1.872.3-2.617.078-.262.328-.518.503-.728.16-.193.476-.23.502-.48.1-.95.111-1.945.158-2.917.03-.628-.006-1.257.045-1.883a.872.872 0 0 0 .03.128c.063.205.297.313.397.502.107.202.164.428.203.653.074.438.072.89.052 1.335-.02.464-.144.916-.18 1.38-.023.293-.142.617-.022.885.09.2.299.343.502.427.397.164.857.151 1.283.098.439-.055.88-.2 1.26-.428.748-.448 1.3-1.165 1.912-1.785 1.005-1.017 2.024-2.032 2.888-3.172.22-.291.515-.57.577-.93a1.28 1.28 0 0 0-.195-.93c-.353-.497-1.01-.69-1.56-.953-.65-.311-1.336-.577-2.04-.735-.51-.114-1.038-.146-1.56-.15-.505-.003-1.022-.01-1.507.128-.444.126-.904.304-1.23.63a1.147 1.147 0 0 0-.12.142c.322-.766.805-1.44 1.282-2.122.092-.034 1.142-.424 1.725-.563.421-.1 1.208-.097 1.208-.097s1.017-1.475 1.582-2.168a28.5 28.5 0 0 1 2.19-2.407A27.565 27.565 0 0 1 13.6 7.619c.936-.701 2.94-1.912 2.94-1.912l-1.65-.818c.245-.271-.092-.975.165-1.29.195-.238.521-.238.93-.247a70.17 70.17 0 0 0 3.247-.158c1.415-.094 2.816-.317 4.223-.502 1.394-.184 2.78-.454 4.177-.608 2.892-.317 5.795-.513 8.7-.652 3.183-.153 6.378-.102 9.563-.203 1.19-.037 2.38-.087 3.57-.15 1.057-.055 2.107-.227 3.165-.202zm-8.295 2.842s-2.33.004-3.495.053c-1.68.07-3.359.203-5.033.352-1.713.153-3.427.313-5.13.555a51.437 51.437 0 0 0-3.697.653c-.28.061-.672.238-.683.525-.066 1.763-.077 3.441-.097 5.16-.022 1.836-.023 5.505-.023 5.505s6.22.05 9.33.105c3.38.06 10.133.247 10.133.247L44.334 3.72zm5.482.03s.8 4.44 1.305 6.638c.532 2.315 1.815 6.892 1.815 6.892s3.722.16 5.58.3c3.444.261 6.881.615 10.313 1.005 1.293.147 3.675.33 3.675.33s-.012-.943.12-1.387c.133-.446.652-1.23.652-1.23l-1.98-7.973s-2.228-.968-3.375-1.357c-1.78-.604-3.601-1.073-5.43-1.508-1.846-.438-3.71-.828-5.587-1.11-1.467-.22-2.947-.332-4.425-.45-.887-.07-2.663-.15-2.663-.15zM23.281 6.284s-1.63.395-2.415.683c-1.099.403-2.185.863-3.195 1.455-1.263.74-2.447 1.63-3.547 2.595-.75.657-1.535 1.315-2.063 2.16-.467.747-.228.713.458 1.035 1.427.67 3.016.928 4.552 1.282 1.47.34 4.448.803 4.448.803L23.28 6.284zm49.17 2.543c.534 2.18 1.3 4.533 1.838 6.712 0 0 .83-.19 1.23-.15.344.035.974.241 1.432.48.4.209.882.517 1.23.803.376.308.807.859.983 1.312.255.659 0 1.905 0 1.905s.996.09 1.635.158c.635.067 1.912.15 1.912.15s-.62-2.578-1.057-3.825c-.296-.844-1.058-2.468-1.058-2.468s-.934-.91-1.455-1.305c-.997-.755-2.083-1.394-3.172-2.01-1.142-.646-3.518-1.762-3.518-1.762zm32.491 12.015a.923.923 0 0 0-.503.105.525.525 0 0 0-.247.457c.023.298.345.493.555.705.695.704 1.535 1.245 2.31 1.86 1.084.862 2.123 1.788 3.27 2.565.497.338 1 .68 1.56.9.496.195 1.032.276 1.56.353.981.143 1.971.216 2.962.202.354-.004.76.093 1.058-.097.196-.126.204-.428.352-.608.227-.274.522-.495.81-.705.158-.115.469-.107.503-.3.1-.575-.71-.932-1.11-1.357-.375-.397-.699-.905-1.208-1.103-.234-.09-.505.058-.75 0-.62-.146-1.124-.605-1.71-.855-.737-.313-1.504-.559-2.265-.81-.766-.252-1.533-.52-2.317-.705-.696-.163-1.4-.264-2.108-.352a22.094 22.094 0 0 0-1.815-.15c-.293-.012-.611-.098-.907-.105zm-87.87 9.615c5.5 0 9.96 4.46 9.96 9.96 0 5.5-4.46 9.96-9.96 9.96-5.501 0-9.96-4.46-9.96-9.96 0-5.5 4.459-9.96 9.96-9.96zm80.474.3c5.501 0 9.961 4.46 9.961 9.96 0 5.5-4.46 9.96-9.96 9.96-5.5 0-9.953-4.46-9.953-9.96 0-5.5 4.452-9.96 9.953-9.96zm-80.475 2.415a7.246 7.246 0 0 0 0 14.49c4 0 7.238-3.245 7.238-7.245s-3.238-7.245-7.238-7.245zm80.475.3a7.24 7.24 0 0 0-7.237 7.245c0 4 3.237 7.245 7.237 7.245 4.001 0 7.246-3.245 7.246-7.245s-3.245-7.245-7.246-7.245z"/></mask><path d="M52.629.877c.2.29.417.412.675.502.838.292 1.606.427 2.587.548 1.5.184 3.114.489 4.59.81 1.889.41 3.741.966 5.58 1.56a63.972 63.972 0 0 1 4.928 1.815 65.063 65.063 0 0 1 4.53 2.115 62.857 62.857 0 0 1 3.72 2.062 67.597 67.597 0 0 1 3.675 2.363c1.372.946 2.698 1.947 4.02 2.962.766.589 1.54 1.177 2.265 1.815.49.43.443.5 1.08.93.488.33 1.085.283 1.635.023.55-.26 1.462-.803 1.462-.803s-1.095-.818-1.957-1.417c.016.002.038.013.053.015.547.075 1.252-.129 1.8-.21.332-.05.677-.064 1.012-.045.73.04 1.444.21 2.16.352 3.53.7 7.059 1.455 10.515 2.46 2.49.725 4.954 1.556 7.343 2.565.794.336 1.599.674 2.31 1.163.655.45 1.267.983 1.762 1.605.467.587.79 1.286 1.11 1.965.299.634.612 1.27.75 1.957.216 1.07.112 2.18.105 3.27a38.397 38.397 0 0 1-.157 3.525c-.119 1.2-.293 2.24-.345 3.443-.011.252-.007.663.097.892.078.173.095.209.15.39.05.164-.03.346-.097.503a3.275 3.275 0 0 1-.705 1.005c-.145.145-.354.212-.503.352-.217.206-.343.496-.555.705-.451.446-.945.863-1.507 1.156-.796.413-1.691.612-2.565.81-.942.212-1.911.318-2.873.397-.669.055-1.236.127-2.01.053-.553-.01-.465-.006-.967-.016.41-1.175.637-2.442.637-3.757 0-6.29-5.103-11.385-11.392-11.385-6.29 0-11.386 5.095-11.386 11.385 0 1.158.174 2.277.495 3.33-.36-.006-.29-.001-.675-.008-24.991-.304-37.895-.723-56.842-1.005-.333-.005-.654-.015-.983-.022.195-.834.3-1.702.3-2.595 0-6.29-5.095-11.385-11.385-11.385S5.68 34.127 5.68 40.417c0 .393.02.78.06 1.162a4.06 4.06 0 0 1-.99-.307c-.661-.3-1.254-.748-1.815-1.208a12.815 12.815 0 0 1-1.658-1.657c-.318-.377-.725-.732-.855-1.208-.165-.6.118-.463.15-1.867.05-2.213-.002-4.43.15-6.638.06-.875.078-1.872.3-2.617.078-.262.328-.518.503-.728.16-.193.476-.23.502-.48.1-.95.111-1.945.158-2.917.03-.628-.006-1.257.045-1.883a.872.872 0 0 0 .03.128c.063.205.297.313.397.502.107.202.164.428.203.653.074.438.072.89.052 1.335-.02.464-.144.916-.18 1.38-.023.293-.142.617-.022.885.09.2.299.343.502.427.397.164.857.151 1.283.098.439-.055.88-.2 1.26-.428.748-.448 1.3-1.165 1.912-1.785 1.005-1.017 2.024-2.032 2.888-3.172.22-.291.515-.57.577-.93a1.28 1.28 0 0 0-.195-.93c-.353-.497-1.01-.69-1.56-.953-.65-.311-1.336-.577-2.04-.735-.51-.114-1.038-.146-1.56-.15-.505-.003-1.022-.01-1.507.128-.444.126-.904.304-1.23.63a1.147 1.147 0 0 0-.12.142c.322-.766.805-1.44 1.282-2.122.092-.034 1.142-.424 1.725-.563.421-.1 1.208-.097 1.208-.097s1.017-1.475 1.582-2.168a28.5 28.5 0 0 1 2.19-2.407A27.565 27.565 0 0 1 13.6 7.619c.936-.701 2.94-1.912 2.94-1.912l-1.65-.818c.245-.271-.092-.975.165-1.29.195-.238.521-.238.93-.247a70.17 70.17 0 0 0 3.247-.158c1.415-.094 2.816-.317 4.223-.502 1.394-.184 2.78-.454 4.177-.608 2.892-.317 5.795-.513 8.7-.652 3.183-.153 6.378-.102 9.563-.203 1.19-.037 2.38-.087 3.57-.15 1.057-.055 2.107-.227 3.165-.202zm-8.295 2.842s-2.33.004-3.495.053c-1.68.07-3.359.203-5.033.352-1.713.153-3.427.313-5.13.555a51.437 51.437 0 0 0-3.697.653c-.28.061-.672.238-.683.525-.066 1.763-.077 3.441-.097 5.16-.022 1.836-.023 5.505-.023 5.505s6.22.05 9.33.105c3.38.06 10.133.247 10.133.247L44.334 3.72zm5.482.03s.8 4.44 1.305 6.638c.532 2.315 1.815 6.892 1.815 6.892s3.722.16 5.58.3c3.444.261 6.881.615 10.313 1.005 1.293.147 3.675.33 3.675.33s-.012-.943.12-1.387c.133-.446.652-1.23.652-1.23l-1.98-7.973s-2.228-.968-3.375-1.357c-1.78-.604-3.601-1.073-5.43-1.508-1.846-.438-3.71-.828-5.587-1.11-1.467-.22-2.947-.332-4.425-.45-.887-.07-2.663-.15-2.663-.15zM23.281 6.284s-1.63.395-2.415.683c-1.099.403-2.185.863-3.195 1.455-1.263.74-2.447 1.63-3.547 2.595-.75.657-1.535 1.315-2.063 2.16-.467.747-.228.713.458 1.035 1.427.67 3.016.928 4.552 1.282 1.47.34 4.448.803 4.448.803L23.28 6.284zm49.17 2.543c.534 2.18 1.3 4.533 1.838 6.712 0 0 .83-.19 1.23-.15.344.035.974.241 1.432.48.4.209.882.517 1.23.803.376.308.807.859.983 1.312.255.659 0 1.905 0 1.905s.996.09 1.635.158c.635.067 1.912.15 1.912.15s-.62-2.578-1.057-3.825c-.296-.844-1.058-2.468-1.058-2.468s-.934-.91-1.455-1.305c-.997-.755-2.083-1.394-3.172-2.01-1.142-.646-3.518-1.762-3.518-1.762zm32.491 12.015a.923.923 0 0 0-.503.105.525.525 0 0 0-.247.457c.023.298.345.493.555.705.695.704 1.535 1.245 2.31 1.86 1.084.862 2.123 1.788 3.27 2.565.497.338 1 .68 1.56.9.496.195 1.032.276 1.56.353.981.143 1.971.216 2.962.202.354-.004.76.093 1.058-.097.196-.126.204-.428.352-.608.227-.274.522-.495.81-.705.158-.115.469-.107.503-.3.1-.575-.71-.932-1.11-1.357-.375-.397-.699-.905-1.208-1.103-.234-.09-.505.058-.75 0-.62-.146-1.124-.605-1.71-.855-.737-.313-1.504-.559-2.265-.81-.766-.252-1.533-.52-2.317-.705-.696-.163-1.4-.264-2.108-.352a22.094 22.094 0 0 0-1.815-.15c-.293-.012-.611-.098-.907-.105zm-87.87 9.615c5.5 0 9.96 4.46 9.96 9.96 0 5.5-4.46 9.96-9.96 9.96-5.501 0-9.96-4.46-9.96-9.96 0-5.5 4.459-9.96 9.96-9.96zm80.474.3c5.501 0 9.961 4.46 9.961 9.96 0 5.5-4.46 9.96-9.96 9.96-5.5 0-9.953-4.46-9.953-9.96 0-5.5 4.452-9.96 9.953-9.96zm-80.475 2.415a7.246 7.246 0 0 0 0 14.49c4 0 7.238-3.245 7.238-7.245s-3.238-7.245-7.238-7.245zm80.475.3a7.24 7.24 0 0 0-7.237 7.245c0 4 3.237 7.245 7.237 7.245 4.001 0 7.246-3.245 7.246-7.245s-3.245-7.245-7.246-7.245z" fill="${color}" stroke="#fff" stroke-width="2" mask="url(#a)"/></svg>
        </div>
        <svg class="car__flag" enable-background="new 0 0 100 104" viewBox="0 0 100 104" xmlns="http://www.w3.org/2000/svg"><g><path d="m22.4 12v85z" fill="#e1f2fa" style="fill: rgb(0, 128, 0);"></path></g><g><path d="m22.4 98.7c-1 0-1.8-.8-1.8-1.8v-84.9c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v85c0 1-.8 1.7-1.8 1.7z" fill="#263238" style="fill: rgb(0, 128, 0);"></path></g><g><path d="m26.3 55.2c5-1.8 14.5-4.3 26.9 1.1 18.2 7.9 30.8 0 30.8 0v-50.7s-12.6 8.1-30.8 0-30.8 0-30.8 0v29 22.2z" fill="#fff" style="fill: rgb(255, 255, 255);"></path><path d="m69.3 61.6c-4.8 0-10.5-.9-16.8-3.7-8.7-3.8-17.1-4.1-25.6-1.1l-3.8 1.6c-.5.2-1.2.2-1.6-.2-.5-.3-.8-.9-.8-1.5v-51.1c0-.6.3-1.1.8-1.5.5-.3 13.6-8.5 32.4-.1 17 7.6 28.6.4 29.1.1s1.2-.4 1.8-.1.9.9.9 1.5v50.7c0 .6-.3 1.2-.8 1.5-.3.3-6.2 3.9-15.6 3.9zm-31-10.3c5.2 0 10.4 1.1 15.6 3.4 14.7 6.4 25.4 2.1 28.3.6v-46.9c-4.8 2.1-15.7 5-29.7-1.2-14.6-6.5-25.4-2.1-28.3-.6v47.6l1.4-.6h.1c4.2-1.6 8.4-2.3 12.6-2.3z" fill="#263238" style="fill: rgb(0, 128, 0);"></path></g><g><path d="m63.5 52.6c-.6-.1-1.6-.3-1.4-.3v-12.4c-2.7-.5-5.5-1.2-8.5-2.5-2.9-1.2-6.6-3-9.1-3.5v12.4c.3.1-.4 0-1.2-.1-8.6-1.2-15.3.9-15.3.9v-12.5s7.4-2.3 16.6-.7v-12.5c-10.1-2-16.6 1.1-16.6 1.1v-12.3s6.5-3.1 16.6-1.1v12.3c2.7.4 6.5 2.2 9.3 3.4 3 1.3 5.7 2.1 8.3 2.6v-12.4c9.6 1.6 16.6-1 16.6-1v12.6c0-.1-.1-.2-.1-.2s-7 2.6-16.6 1v12.5c2.4.5 4.5.6 6.4.6 6.3 0 10.1-1.8 10.1-1.8l.1 12.5c.1 0-5.9 2.8-15.2 1.4z" fill="#263238" style="fill: rgb(0, 128, 0);"></path></g><g><path d="m26.4 97h-7.8c-1.4 0-2.6 5-2.6 5h13s-1.2-5-2.6-5z" fill="#e1f2fa" style="fill: rgb(0, 128, 0);"></path><path d="m29 103.8h-13c-.5 0-1-.2-1.4-.7s-.5-1-.3-1.5c1-4.2 2.4-6.4 4.3-6.4h7.8c1.9 0 3.3 2.1 4.3 6.4.1.5 0 1.1-.3 1.5s-.9.7-1.4.7zm-10.7-3.5h8.3c-.2-.7-.5-1.2-.7-1.5h-6.9c-.2.3-.4.8-.7 1.5z" fill="#263238" style="fill: rgb(0, 128, 0);"></path></g></svg>
      </div>
    `;

    return carBlock;
  }
}

export default CarView;
