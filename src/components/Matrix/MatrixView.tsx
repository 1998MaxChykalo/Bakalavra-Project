import React from 'react';

import { Formik, Field, FieldArray, Form } from 'formik';
import { interpolate } from 'd3';
import './MatrixView.scss';

interface Props {
  matrix: number[][];
  onSubmit: any;
}

export const MatrixView: React.FC<Props> = ({ matrix, onSubmit }) => {
  const renderRow = (index: number) => matrix[index] && matrix[index].length > 0
    ? (
      <tr key={`matrix[${index}]`}>
        {matrix[index].map((q, j) => (
          <td key={`matrix[${index}][${j}]`}>
            <Field type='number' style={{ width: '35px', height: '35px', textAlign: 'center' }} name={`matrix[${index}][${j}]`} />
          </td>
        )
        )}
      </tr>)
    : null;
  return <Formik
    onSubmit={values => onSubmit(values.matrix)}
    initialValues={{ matrix }}>
    {({ values, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <FieldArray
          name="matrix"
          render={() => {
            const matrix = values.matrix;
            return (
              <table>
                <tbody>
                  {matrix && matrix.length > 0 ? (
                    matrix.map((question, index) => (
                      <FieldArray
                        name={`matrix.${index}`}
                        render={() => renderRow(index)}
                      />
                    ))
                  ) : null}
                </tbody>
              </table>
            );
          }}
        />
        <button type="submit">Submit</button>
      </form>
    )
    }
  </Formik>
};