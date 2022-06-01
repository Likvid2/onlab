//<![CDATA[
class Token {
    constructor(tokenInstance) {
        this.props = tokenInstance;
        this.setConfirm();
    }
    setConfirm() {
        window.onConfirm = function() {
            window.close();
        }
    }
    render() {
        return`
        <div class="ui container">
          <div class="ui segment">
            <span><bold><h3>VIPs: ${this.props.VIPs}</h3></bold></span>
          </div>
        </div>
`;
    }
}

web3.tokens.dataChanged = (oldTokens, updatedTokens, tokenIdCard) => {
    const currentTokenInstance = web3.tokens.data.currentInstance;
    document.getElementById(tokenIdCard).innerHTML = new Token(currentTokenInstance).render();
};
//]]>