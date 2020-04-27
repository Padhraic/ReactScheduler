import * as React from 'react';
import { connect } from 'react-redux';
import { Scheduler, DayView } from '@progress/kendo-react-scheduler';
import '@progress/kendo-date-math/tz/America/New_York';
/*import '@progress/kendo-date-math/tz/Asia/Tokyo';*/


const date = new Date('2018-10-21T00:00:00');
const data = [{
    id: 0,
    start: new Date('2018-10-21T09:00:00Z'),
    end: new Date('2018-10-21T09:30:00Z'),
    title: '9am UTC'
}]

const Home = () => (
  <div>
        <Scheduler
            data={data}
            defaultDate={date}
            timezone="America/New_York"
        /*timezone="Asia/Tokyo */
        /*timezone="Tokyo Standard Time"*/
        >
            {/* To be sure the event is visible, we will disabled showing `work hours` only */}
            <DayView showWorkHours={false} />
        </Scheduler>
  </div>
);

export default connect()(Home);
