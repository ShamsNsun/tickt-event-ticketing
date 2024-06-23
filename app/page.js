// app/page.js
import CustomLayout from '../src/components/CustomLayout';
import MeetingStream from '../src/components/MeetingStream';
import NotesEditor from '../src/components/NotesEditor';
import ActionItems from '../src/components/ActionItems';
import Chat from '../src/components/Chat';

export default function Home() {
  return (
    <CustomLayout>
      <div className="lg:col-span-2">
        <NotesEditor />
      </div>
      <div className="lg:col-span-1 space-y-6">
        <MeetingStream />
        <ActionItems />
        <Chat />
      </div>
    </CustomLayout>
  );
}