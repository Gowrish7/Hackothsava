import { MultiChatSocket , MultiChatWindow ,useMultiChatLogic } from 'react-chat-engine-advanced'



const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '82b7ce93-59ed-49f0-adfa-30ab906d2b16',
    props.user.username , props.user.secret);
  return (
    <div style={{height: '100vh'}}> 
        <MultiChatWindow {...chatProps} />
        <MultiChatSocket {...chatProps}  style={{height: '100%'}}/>
    </div>  
  )
}

export default ChatsPage
