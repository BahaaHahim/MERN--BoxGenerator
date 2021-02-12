import React, {useState} from 'react'


const MessageForm = (props) => {
    const [msg , setMsg] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onNewMessage(msg);
        setMsg("");
    };


    return (
        <div className="App">
            <form onSubmit={ handleSubmit }>

                <input
                    placeholder="color"
                    onChange={ (e) => setMsg(e.target.value) }
                    value={ msg }
                />
                <input type="submit" value="Send Message" />
            </form>
        </div>
    );
        
};

export default MessageForm
