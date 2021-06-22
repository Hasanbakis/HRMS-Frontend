import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import JobAdvertisementService from '../services/jobAdvertisementService'

import { Icon, Menu, Table } from 'semantic-ui-react';

export default function JobAdvertisementDto() {
    let {id} = useParams();
    

    const [jobAdvertisement, setJobAdvertisement] = useState({})

    

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisementByIdAndStatusTrue(id).then(result=>setJobAdvertisement(result.data.data));
        
    }, [id])
  


    
    return (
        <div>
                <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>MinSalary</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

        
            <Table.Row >
            <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
            <Table.Cell>{jobAdvertisement.employer?.companyName}</Table.Cell>
            </Table.Row>
          
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
