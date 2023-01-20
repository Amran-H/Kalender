import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { useForm } from "react-hook-form";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MySchedule = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg font-semibold",
                selected
                  ? "bg-emerald-500 text-white shadow"
                  : "text-black border-none hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Ongoing Event
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-semibold leading-5",
                selected
                  ? "bg-emerald-500 text-white shadow"
                  : "text-black border-none hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Complete
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2 border-none">
          <Tab.Panel className={classNames("rounded-xl bg-white p-3")}>
            <ul>
              <li className="relative rounded-md p-3 hover:bg-gray-100">
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Event Name</th>
                        <th>Date</th>
                        <th>Have You Join It</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>Break The English Nut</td>
                        <td>20/01/2023</td>
                        <td>
                          <label
                            htmlFor="my-modal-3"
                            className="btn btn-success btn-xs text-white"
                          >
                            Change Status
                          </label>

                          <div className="mx-auto">
                            <input
                              type="checkbox"
                              id="my-modal-3"
                              className="modal-toggle"
                            />
                            <div className="modal">
                              <div className="modal-box relative">
                                <label
                                  htmlFor="my-modal-3"
                                  className="btn btn-sm btn-circle absolute right-2 top-2"
                                >
                                  ✕
                                </label>
                                <div className="flex justify-center">
                                  <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control">
                                      <select
                                        {...register("status")}
                                        className="select my-5 w-full max-w-xs text-white bg-success "
                                      >
                                        <option>Yes</option>
                                        <option>No</option>
                                      </select>
                                    </div>

                                    <div className="flex justify-center">
                                      <button
                                        className="mt- btn btn-sm text-white btn-success"
                                        type="submit"
                                      >
                                        Complete
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <button className="btn btn-error btn-xs text-white">
                            Cancel
                          </button>
                          <button className="rounded-lg btn-success cursor-not-allowed btn-xs text-white">
                            Complete
                          </button>
                          <button className="cursor-not-allowed rounded-lg btn-error btn-xs text-white">
                            Event Incomplete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            </ul>
          </Tab.Panel>
          <Tab.Panel className={classNames("rounded-xl bg-white p-3")}>
            <ul>
              <li className="relative rounded-md p-3 hover:bg-gray-100">
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Event Name</th>
                        <th>Date</th>
                        <th>Number Of User Join</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>Break the English Nut</td>
                        <td>20/01/2023</td>
                        <td>10</td>
                        <td>
                          <button className="rounded-lg btn-success cursor-not-allowed btn-xs text-white">
                            Complete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default MySchedule;
