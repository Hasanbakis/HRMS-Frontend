import React,{useState,useEffect} from "react";
import { Icon,Menu, Table } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";


export default function JobAdvertismentList() {

  const [jobAdvertisements, setJobAdvertisements] = useState([])

  useEffect(()=>{
    let jobAdvertisementService = new JobAdvertisementService()
    jobAdvertisementService.getJobAdvertisement().then(result=>setJobAdvertisements(result.data.data))
  })
    
    return (
        <div>
             <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Position</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Web Address</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Release Date</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
              <Table.Cell>{jobAdvertisement.position.position}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employer.webAddress}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employer.phoneNumber}</Table.Cell>
              <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>
              <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
            
        </div>
    )
}
