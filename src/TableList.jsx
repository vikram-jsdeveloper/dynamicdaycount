import React, { useEffect, useState } from "react";
import styles from "./TableList.module.scss";
import SkeletonList from "./SkeletonList";

function TableList() {
  const [userList, setuserList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fecthData = async () => {
    const response = [
      {
        name: "Foo Bar1",
        createDate: "Oct 1 2020",
        passwordChangedDate: "Oct 1 2021",
        lastAccessDate: "Jan 4 2025",
        mfaEnabled: "yes",
      },
      {
        name: "Foo1 Bar1",
        createDate: "Sep 20 2019",
        passwordChangedDate: "Sep 22 2019",
        lastAccessDate: "Feb 8 2025",
        mfaEnabled: "no",
      },
      {
        name: "Foo2 Bar2",
        createDate: "Feb 3 2022",
        passwordChangedDate: "Feb 3 2022",
        lastAccessDate: "Feb 12 2025",
        mfaEnabled: "no",
      },
      {
        name: "Foo3 Bar3",
        createDate: "Mar 7 2023",
        passwordChangedDate: "Mar 10 2023",
        lastAccessDate: "Jan 3 2022",
        mfaEnabled: "yes",
      },
      {
        name: "Foo Bar4",
        createDate: "Apr 8 2018",
        passwordChangedDate: "Apr 12 2020",
        lastAccessDate: "Oct 4 2022",
        mfaEnabled: "no",
      },
    ];
    setTimeout(() => {
      setuserList(response);
      setLoading(false);
    }, 1500);
  };
  useEffect(() => {
    fecthData();
  }, []);

  function dayCount(date) {
    const currentDate = new Date();
    const givenDate = new Date(date);
    const difference = Math.abs(currentDate - givenDate);
    return Math.floor(difference / (1000 * 60 * 60 * 24));
  }
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>User Details</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.tableList}>
            <thead>
              <tr>
                <th>Human User</th>
                <th>Create Date</th>
                <th>Password Changed Date</th>
                <th>Days since last password change</th>
                <th>Last Access Date</th>
                <th>Days since Last Access</th>
                <th>MFA Enabled</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <>
                  <SkeletonList />
                  <SkeletonList />
                  <SkeletonList />
                  <SkeletonList />
                </>
              ) : (
                userList.length > 0 &&
                userList.map((list, index) => (
                  <tr key={index}>
                    <td>{list.name}</td>
                    <td>{list.createDate}</td>
                    <td>{list.passwordChangedDate}</td>
                    <td>{dayCount(list.passwordChangedDate)}</td>
                    <td>{list.lastAccessDate}</td>
                    <td>{dayCount(list.lastAccessDate)}</td>
                    <td>
                      {list.mfaEnabled === "yes" ? (
                        <span className={`${styles.label} ${styles.enabled}`}>
                          {list.mfaEnabled}
                        </span>
                      ) : (
                        <span className={`${styles.label} ${styles.disabled}`}>
                          {list.mfaEnabled}
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TableList;
