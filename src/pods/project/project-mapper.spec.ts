import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('project-mapper specs', () => {
    it('should map a project from API to view model', () => {
      // Arrange
      const projectFromApi: apiModel.Project = {
        id: '1',
        name: 'Test Project',
        isActive: true,
        employees: [
          {
            id: '1',
            employeeName: 'John Doe',
            isAssigned: true
          },
          {
            id: '2',
            employeeName: 'Jane Smith',
            isAssigned: false
          },
        ],
      };
      // Act
      const result = mapProjectFromApiToVm(projectFromApi);
      // Assert
        expect(result.id).toEqual('1');
        expect(result.name).toEqual('Test Project');
        expect(result.employees.length).toEqual(2);
        expect(result.employees[0].id).toEqual('1');
        expect(result.employees[0].employeeName).toEqual('John Doe');
        expect(result.employees[0].isAssigned).toEqual(true);
        expect(result.employees[1].id).toEqual('2');
        expect(result.employees[1].employeeName).toEqual('Jane Smith');
        expect(result.employees[1].isAssigned).toEqual(false);
    });

    it('should map a project from API to view model', () => {
        // Arrange
        const projectFromApi: apiModel.Project = {
            id: '',
            name: '',
            isActive: false,
            employees: [],
          };
      
          // Act
          const result = mapProjectFromApiToVm(projectFromApi);
      
          // Assert
          const expectedViewModel: viewModel.Project = {
            id: '',
            name: '',
            isActive: false,
            employees: [],
          };
          expect(result).toEqual(expectedViewModel);
      });
  });