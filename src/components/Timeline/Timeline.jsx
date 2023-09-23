import React from 'react'

const Timeline = () => {
  return (
    <div className='helper_wrapper'>
        <div className='top_topic'>
            <h3 className='title'>Timeline</h3>
            <p className='paragraph'>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
        </div>
        <div className='timeline-wrapper'>
            <div className='vertical_timeline vertical_timeline_left vt_left'>
                <div className="vertical_timeline_content">
                    <img className='tl_star' src="images/star_pu.png" alt="Star_2" />
                    <h4 className='span-color timeline_title'>Hackathon Announcement</h4>
                    <p className="timeline_paragraph">The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                </div>
                <div className="vertical_timeline_content">
                    <h4 className='span-color timeline_title'>November 18, 2023</h4>
                </div>
                <div className="vertical_timeline_content">
                    <h4 className='span-color timeline_title'>Teams Registration ends</h4>
                    <p className="timeline_paragraph">Interested Participants are no longer Allowed to register</p>
                </div>
                <div className="vertical_timeline_content">
                    <h4 className='span-color timeline_title'>November 18, 2023</h4>
                </div>
                <div className="vertical_timeline_content">
                    <h4 className='span-color timeline_title'>Getlinked Hackathon 1.0 Offically Begins</h4>
                    <p className="timeline_paragraph">Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                </div>
                <div className="vertical_timeline_content">
                    <img className='tl_star_3' src="images/star_gra.png" alt="Star_2" />
                    <h4 className='span-color timeline_title'>November 18, 2023</h4>
                </div>
            </div>
            <div className='vertical'>
                <div className='line_circle'>
                    <div className='vertical-short'></div>
                    <div className='circle first_circle'><span>1</span></div>
                </div>
                <div className='line_circle'>
                    <div className='vertical-short'></div>
                    <div className='circle'><span>2</span></div>
                </div>
                <div className='line_circle'>
                    <div className='vertical-short'></div>
                    <div className='circle'><span>3</span></div>
                </div>
                <div className='line_circle'>
                    <div className='vertical-short'></div>
                    <div className='circle'><span>4</span></div>
                </div>
                <div className='line_circle'>
                    <div className='vertical-short'></div>
                    <div className='circle'><span>5</span></div>
                </div>
                <div className='line_circle'>
                    <div className='vertical-short'></div>
                    <div className='circle'><span>6</span></div>
                </div>
            </div>
            <div className='vertical_timeline vt_right'>
                <div className="vertical_timeline_content">
                    <h4 className='span-color timeline_title'>November 18, 2023</h4>
                </div>
                <div className="vertical_timeline_content">
                    <h4 className='span-color timeline_title'>Teams Registration begins</h4>
                    <p className="timeline_paragraph timeline_paragraph_right">Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                </div>
                <div className="vertical_timeline_content">
                    <img className='tl_star_2' src="images/star.png" alt="Star_2" />
                    <h4 className='span-color timeline_title'>November 18, 2023</h4>
                </div>
                <div className="vertical_timeline_content">
                    <h4 className='span-color timeline_title'>Announcement of the accepted teams and ideas</h4>
                    <p className="timeline_paragraph timeline_paragraph_right">All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                </div>
                <div className="vertical_timeline_content">
                    <h4 className='span-color timeline_title'>November 18, 2023</h4>
                </div>
                <div className="vertical_timeline_content">
                    <h4 className='span-color timeline_title'>Demo Day</h4>
                    <p className="timeline_paragraph timeline_paragraph_right">Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Timeline