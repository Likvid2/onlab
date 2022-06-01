//<![CDATA[
class Token {
    constructor(tokenInstance) {
        this.props = tokenInstance;
    }

    render() {
        let message = "This is OLC!";
        return`
        <div class="ui container">
          <div class="ui segment">
          <span><bold><h1>${message}</h1></bold></span>
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