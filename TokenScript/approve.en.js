//<![CDATA[
class Token {

    constructor(tokenInstance) {
        this.props = tokenInstance;
    }

    render() {
        let message = "Approve someone to use your tokens!";
        return`
        <div class="ui container">
          <div class="ui segment">
            <img src="data:image/jpeg;base64,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">
            <span><bold><h3>${message}</h3></bold></span>
            <input id="approvalAddress" type="text">
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
