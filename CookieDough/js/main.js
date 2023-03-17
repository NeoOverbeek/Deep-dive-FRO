class Cookie{
    htmlElement = undefined;
    name = "Chocolate chip cookie";
    score = undefined;
    factor = 1;

    //dit wordt 1x uitgevoer wanneer "new" wordt gebruikt.
    constructor(newName, newHTMLelement, newScore){
        this.name = newName;
        this.htmlElement = newHTMLelement;
        this.htmlElement.onclick = this.onCookieClicked;
        this.score = newScore;
    }

    onCookieClicked = () =>{
        this.score.onCookieClicked(this.factor);
    }

    onChocolateChange(){
        this.htmlElement.classList.add("cookie--chocolate");
    }

    onVelvetChange(){
        this.htmlElement.classList.add("cookie--velvet");
    }
}

class Score{
    score;
    name = "";
    htmlElement = undefined;

    constructor(newScore, newName, newHTMLelement){
        this.score = newScore;
        this.name - newName;
        this.htmlElement = newHTMLelement;
        this.htmlElement.innerText = newScore;
    }

    onCookieClicked(factorFromCookie){
        this.score = this.score + factorFromCookie;
        this.htmlElement.innerText = this.score;
    }

    subtractScore(){
        this.score = this.score - 100;
        this.htmlElement.innerText = this.score;
        // Als je het niet update of laat zien zoals hier gebeurt gebeurt het alleen in het geheugen en niet op de pagina
    }

    onAutoScoreClicked(){
        setInterval( () => {
            this.score = this.score + 500;
            this.htmlElement.innerText = this.score;
        }, 10000)
    }

    addPoints(){
        this.score = this.score + 10000;
        this.htmlElement.innerText = this.score;
    }

}

class Multiplier{
    factor = 100;
    htmlElement = undefined;
    cookie = undefined;
    bought = false;

    constructor(htmlElement, cookie){
        this.htmlElement = htmlElement;
        this.cookie = cookie;
        this.htmlElement.onclick = this.onMultiplierClicked;
    }

    onMultiplierClicked = () =>{
        if(this.bought === false){
            this.bought = true;
            this.cookie.score.subtractScore();
            this.cookie.factor = this.factor;
        }

    }
}

class AutoScore{
    htmlElement = undefined;
    score = undefined;
    bought = false;

    constructor(htmlElement, score){
        this.htmlElement = htmlElement;
        this.score = score;
        this.htmlElement.onclick = this.onAutoScoreClicked;
    }

    onAutoScoreClicked = () => {
        if(this.bought === false){
            this.bought = true;
            this.score.subtractScore();
            this.score.onAutoScoreClicked();
        }
        
    }
}

class ChocolateCookie{
    htmlElement = undefined;
    bought = false;
    cookie = undefined;

    constructor(htmlElement, cookie,){
        this.htmlElement = htmlElement;
        this.cookie = cookie;
        this.htmlElement.onclick = this.onChocolateCookieClicked;
    }

    onChocolateCookieClicked = () => {
        if(this.bought === false){
            this.bought = true;
            this.cookie.onChocolateChange();
            this.cookie.score.addPoints();
        }
        
    }
}

class VelvetCookie{
    htmlElement = undefined;
    bought = false;
    cookie = undefined;

    constructor(htmlElement, cookie){
        this.htmlElement = htmlElement;
        this.cookie = cookie;
        this.htmlElement.onclick = this.onVelvetCookieClicked;
    }

    onVelvetCookieClicked = () => {
        if(this.bought === false){
            this.bought = true;
            this.cookie.onVelvetChange();
            this.cookie.score.addPoints();
        }
    }
}


/* Setup voor de score en cookie */
const score = new Score(912, "Default Score", document.getElementById("js--score"));
const cookie = new Cookie("Default Cookie", document.getElementById("js--cookie"), score);

/* Setup voor de upgrades */
const multiplier = new Multiplier(document.getElementById("js--multiplier"), cookie);
const auto = new AutoScore(document.getElementById("js--autoScore"), score);
const velvet = new VelvetCookie(document.getElementById("js--velvet"), cookie);
const chocolate = new ChocolateCookie(document.getElementById("js--chocolate"), cookie,);

/* Mobile upgrades */
const multiplierMobile = new Multiplier(document.getElementById("js--multiplier--mobile"), cookie);
const autoMobile = new AutoScore(document.getElementById("js--autoScore--mobile"), score);
const chocolateMobile = new ChocolateCookie(document.getElementById("js--chocolate--mobile"), cookie);


