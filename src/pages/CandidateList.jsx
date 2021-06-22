import React, { useEffect, useState } from 'react'
import { Card, Image,Button} from 'semantic-ui-react'
import CandidateService from '../services/CandidateService'

export default function CandidateList() {

    const [candidates,setCandidates] = useState([]) 

    useEffect(() => {
       let candidateService = new CandidateService()
       candidateService.getCandidate().then(result=>setCandidates(result.data.data))
    }, [])
    return (
        <div>
           <Card.Group>
            {candidates.map(candidate=>(
                 <Card key={candidate.id} fluid color='red'>
                 <Card.Content>
                   <Image
                     floated="right"
                     size="mini"
                     src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png"
                   />   
                   <Card.Header>{candidate.firstName+ " " +candidate.lastName}</Card.Header>
                   <Card.Meta>{candidate.birthDate}</Card.Meta>
                 </Card.Content>
                 <Card.Content extra>
                   <div className="ui two buttons">
                     <Button basic color="green">
                       Message
                     </Button>
                     </div>
                     </Card.Content>
               </Card>


            ))
    }
      </Card.Group>
        </div>
    )
}
