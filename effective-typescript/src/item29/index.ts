// ## Item 29: Prefer Types That Always Represent Valid States

/*
Show me your flowcharts and conceal your tables, and I shall continue to be mystified.
Show me your tables, and I won’t usually need your flowcharts; they’ll be obvious.
 —​Fred Brooks, The Mythical Man Month
 
 Well-designed types make your code self-explanatory and straightforward to write.
 Poorly designed types lead to confusion and bugs, no matter how clever well-documented.
*/
namespace Item29 {

    // this State define 
    //
    // interface State {
    //     pageText: string;
    //     isLoading: boolean;
    //     error?: string;
    // }

    // next are beter state defines, easier to implement

    interface RequestPending {
        state: 'pending';
    }
    interface RequestError {
        state: 'error';
        error: string;
    }
    interface RequestSuccess {
        state: 'ok';
        pageText: string;
    }
    type RequestState = RequestPending | RequestError | RequestSuccess;
    interface State {
        currentPage: string;
        requests: { [page: string]: RequestState };
    }

    /*
    Note: this part is called object destructuring, extracting currentPage property from object state
    const { currentPage } = state;

    - Cleaner syntax: Especially when you're accessing multiple properties.
    - Less repetition: You don’t need to write state.currentPage, state.requests, etc.
    - More readable: Makes it clear which parts of the object you're using.
    */
    function renderPage(state: State) {
        const { currentPage } = state;
        const requestState = state.requests[currentPage];
        switch (requestState.state) {
            case 'pending':
                return `Loading ${currentPage}...`;
            case 'error':
                return `Error! Unable to load ${currentPage}: ${requestState.error}`;
            case 'ok':
                return `<h1>${currentPage}</h1>\n${requestState.pageText}`;
        }
    }

    async function changePage(state: State, newPage: string) {
        state.requests[newPage] = { state: 'pending' };
        state.currentPage = newPage;
        try {
            const response = await fetch(getUrlForPage(newPage));
            if (!response.ok) {
                throw new Error(`Unable to load ${newPage}: ${response.statusText}`);
            }
            const pageText = await response.text();
            state.requests[newPage] = { state: 'ok', pageText };
        } catch (e) {
            state.requests[newPage] = { state: 'error', error: '' + e };
        }
    }

    declare function getUrlForPage(newPage: string): string;


}

