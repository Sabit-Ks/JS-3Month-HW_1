// GMAIL BLOCK

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/

gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else{
        gmailResult.innerHTML = 'NOT OK'
		gmailResult.style.color = 'red'
    }
    if(gmailInput.value === '') {
        gmailResult.innerHTML = ''
    }
}


// MOVE BLOCK

const parentBlock = document.querySelector('.parent_block')
const blockRed = document.querySelector('.child_block')

const offsetWidth = parentBlock.offsetWidth - blockRed.offsetWidth

let positionX = 0

const movingBlock = () => {
    if (positionX < offsetWidth) {
			positionX++
			blockRed.style.left = `${positionX}px`
			requestAnimationFrame(movingBlock)
		}
}
movingBlock()

