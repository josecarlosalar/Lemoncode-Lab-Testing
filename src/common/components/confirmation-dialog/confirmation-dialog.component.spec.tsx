import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';


describe('ConfirmationDialogComponent', () => {
    it('should display the confirmation dialog when it feeds isOpen equals true', () => {
        // Arrange
        const props = {
            isOpen: true,
            onAccept: jest.fn(),
            onClose: jest.fn(),
            title: 'Test title',
            labels: {
              closeButton: 'Close',
              acceptButton: 'Accept',
            },
            children: <div>Test content</div>,
          };
        // Act
        render(<ConfirmationDialogComponent {...props} />);
        const titleElement = screen.getByText(props.title);
        const contentElement = screen.getByRole('dialog') as HTMLDivElement;
        const acceptButtonElement = screen.getByText('Accept');
        const closeButtonElement = screen.getByText('Close');
        // Assert
        expect(titleElement).toBeInTheDocument();
        expect(contentElement).toBeInTheDocument();
        expect(acceptButtonElement).toBeInTheDocument();
        expect(closeButtonElement).toBeInTheDocument();
    });
    
    it('should call onAccept when it clicks on accept button', () => {
        // Arrange
        const props = {
            isOpen: true,
            onAccept: jest.fn(),
            onClose: jest.fn(),
            title: 'Test title',
            labels: {
              closeButton: 'Close',
              acceptButton: 'Accept',
            },
            children: <div>Test content</div>,
          };
        // Act
        const { getByText } = render(<ConfirmationDialogComponent {...props} />);
        const acceptButtonElement = getByText('Accept');
        fireEvent.click(acceptButtonElement);
        // Assert
        expect(props.onAccept).toHaveBeenCalled();
    });
    
    it('should call onClose when it clicks on close button', () => {
        // Arrange
        const props = {
            isOpen: true,
            onAccept: jest.fn(),
            onClose: jest.fn(),
            title: 'Test title',
            labels: {
              closeButton: 'Close',
              acceptButton: 'Accept',
            },
            children: <div>Test content</div>,
          };
        // Act
        const { getByText } = render(<ConfirmationDialogComponent {...props} />);
        const closeButtonElement = getByText('Close');
        fireEvent.click(closeButtonElement);
        // Assert
        expect(props.onClose).toHaveBeenCalled();
    });

    it('should not display the confirmation dialog when it feeds isOpen equals false', () => {
        // Arrange
        const props = {
            isOpen: false,
            onAccept: jest.fn(),
            onClose: jest.fn(),
            title: 'Test title',
            labels: {
              closeButton: 'Close',
              acceptButton: 'Accept',
            },
            children: <div>Test content</div>,
          };
        // Act
        const { queryByText } = render(<ConfirmationDialogComponent {...props} />);
        const titleElement = queryByText(props.title);
        // Assert
        expect(titleElement).not.toBeInTheDocument();
    });

});


